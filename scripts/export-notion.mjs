// One-time export: pull all "Done" posts from Notion and write them as
// Markdown files with frontmatter into content/blog/. After this runs, the
// blog is served entirely from the filesystem and Notion is no longer needed
// at build or request time.
//
// Usage: node scripts/export-notion.mjs
import fs from 'fs';
import path from 'path';

const ROOT = process.cwd();

// --- Load .env (NOTION_API_KEY, NOTION_DATABASE_ID) -------------------------
const env = Object.fromEntries(
  fs
    .readFileSync(path.join(ROOT, '.env'), 'utf8')
    .split('\n')
    .filter((l) => l.includes('=') && !l.trim().startsWith('#'))
    .map((l) => {
      const i = l.indexOf('=');
      return [l.slice(0, i).trim(), l.slice(i + 1).trim()];
    })
);
const NOTION_KEY = env.NOTION_API_KEY;
const DATABASE_ID = env.NOTION_DATABASE_ID;
if (!NOTION_KEY || !DATABASE_ID) {
  console.error('Missing NOTION_API_KEY or NOTION_DATABASE_ID in .env');
  process.exit(1);
}

const NOTION_VERSION = '2022-06-28';
const headers = {
  Authorization: `Bearer ${NOTION_KEY}`,
  'Notion-Version': NOTION_VERSION,
  'Content-Type': 'application/json',
};

async function notion(url, options = {}) {
  const res = await fetch(`https://api.notion.com/v1${url}`, { headers, ...options });
  const json = await res.json();
  if (json.object === 'error') {
    throw new Error(`Notion error ${json.code}: ${json.message}`);
  }
  return json;
}

// --- Helpers ----------------------------------------------------------------
function safeSlug(text) {
  return String(text)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function plain(richText) {
  return (richText || []).map((t) => t.plain_text).join('');
}

// Convert a Notion rich_text array into inline Markdown.
function richToMarkdown(richText) {
  return (richText || [])
    .map((t) => {
      let s = t.plain_text;
      if (!s) return '';
      const a = t.annotations || {};
      if (a.code) s = '`' + s + '`';
      if (a.bold) s = `**${s}**`;
      if (a.italic) s = `*${s}*`;
      if (a.strikethrough) s = `~~${s}~~`;
      if (t.href) s = `[${s}](${t.href})`;
      return s;
    })
    .join('');
}

// Recursively fetch all children of a block / page.
async function fetchChildren(blockId) {
  const blocks = [];
  let cursor;
  do {
    const qs = cursor ? `?start_cursor=${cursor}&page_size=100` : '?page_size=100';
    const res = await notion(`/blocks/${blockId}/children${qs}`);
    blocks.push(...res.results);
    cursor = res.has_more ? res.next_cursor : undefined;
  } while (cursor);
  return blocks;
}

// Convert an ordered list of sibling blocks into Markdown.
// `slug` is used to rewrite image blocks to the local /blog/<slug>.webp asset.
async function blocksToMarkdown(blocks, slug, depth = 0) {
  const indent = '  '.repeat(depth);
  const lines = [];

  for (const block of blocks) {
    const { type } = block;
    const value = block[type] || {};
    const text = richToMarkdown(value.rich_text);

    switch (type) {
      case 'paragraph':
        lines.push(indent + text);
        break;
      case 'heading_1':
        lines.push(`${indent}# ${text}`);
        break;
      case 'heading_2':
        lines.push(`${indent}## ${text}`);
        break;
      case 'heading_3':
        lines.push(`${indent}### ${text}`);
        break;
      case 'bulleted_list_item':
        lines.push(`${indent}- ${text}`);
        break;
      case 'numbered_list_item':
        lines.push(`${indent}1. ${text}`);
        break;
      case 'to_do':
        lines.push(`${indent}- [${value.checked ? 'x' : ' '}] ${text}`);
        break;
      case 'quote':
        lines.push(`${indent}> ${text}`);
        break;
      case 'callout': {
        const emoji = value.icon?.emoji ? `${value.icon.emoji} ` : '';
        lines.push(`${indent}> ${emoji}${text}`);
        break;
      }
      case 'code': {
        const lang = value.language && value.language !== 'plain text' ? value.language : '';
        lines.push(`${indent}\`\`\`${lang}\n${plain(value.rich_text)}\n${indent}\`\`\``);
        break;
      }
      case 'image': {
        const caption = plain(value.caption) || '';
        lines.push(`${indent}![${caption}](/blog/${safeSlug(slug)}.webp)`);
        break;
      }
      case 'divider':
        lines.push(`${indent}---`);
        break;
      case 'toggle':
        // Render the summary as bold text; children follow below.
        lines.push(`${indent}**${text}**`);
        break;
      default:
        if (text) lines.push(indent + text);
        break;
    }

    // Recurse into children (nested lists, toggle content, etc.)
    if (block.has_children && type !== 'column_list' && type !== 'table') {
      const children = await fetchChildren(block.id);
      const childMd = await blocksToMarkdown(children, slug, depth + 1);
      if (childMd.trim()) lines.push(childMd);
    }
  }

  // Join: list items stay tight, everything else gets a blank line between.
  const out = [];
  for (let i = 0; i < lines.length; i++) {
    out.push(lines[i]);
    const cur = lines[i];
    const next = lines[i + 1];
    const isListLike = (s) => /^\s*(-|\d+\.|- \[)/.test(s);
    if (next && isListLike(cur) && isListLike(next)) continue; // tight list
    if (next) out.push('');
  }
  return out.join('\n');
}

function getAuthor(prop) {
  if (!prop) return 'Randomyl Team';
  if (prop.multi_select?.length) return prop.multi_select.map((a) => a.name).join(', ');
  if (prop.select?.name) return prop.select.name;
  if (prop.people?.length) return prop.people.map((p) => p.name).filter(Boolean).join(', ');
  if (prop.rich_text?.length) return plain(prop.rich_text);
  return 'Randomyl Team';
}

function yamlString(s) {
  return JSON.stringify(s ?? '');
}

// --- Main -------------------------------------------------------------------
async function main() {
  const outDir = path.join(ROOT, 'content', 'blog');
  fs.mkdirSync(outDir, { recursive: true });

  // Query all "Done" posts (paginated).
  const pages = [];
  let cursor;
  do {
    const body = {
      filter: { property: 'Status', status: { equals: 'Done' } },
      page_size: 100,
    };
    if (cursor) body.start_cursor = cursor;
    const res = await notion(`/databases/${DATABASE_ID}/query`, {
      method: 'POST',
      body: JSON.stringify(body),
    });
    pages.push(...res.results);
    cursor = res.has_more ? res.next_cursor : undefined;
  } while (cursor);

  console.log(`Found ${pages.length} published posts. Exporting...`);

  let written = 0;
  for (const page of pages) {
    const p = page.properties;
    const title = plain(p.Title?.title) || 'Untitled Post';
    const slug = plain(p.Slug?.rich_text) || safeSlug(title);
    const excerpt = plain(p.Excerpt?.rich_text) || '';
    const metaDescription = plain(p.MetaDescription?.rich_text) || excerpt;
    const created = p.Created?.created_time || page.created_time;
    const lastModified = page.last_edited_time || created;
    const tags = p.Tags?.multi_select?.map((t) => t.name) || [];
    const author = getAuthor(p.Author);

    const blocks = await fetchChildren(page.id);
    const markdown = await blocksToMarkdown(blocks, slug);

    const imgPath = path.join(ROOT, 'public', 'blog', `${safeSlug(slug)}.webp`);
    const hasLocalImage = fs.existsSync(imgPath);

    const fm = [
      '---',
      `title: ${yamlString(title)}`,
      `slug: ${yamlString(slug)}`,
      `excerpt: ${yamlString(excerpt)}`,
      `metaDescription: ${yamlString(metaDescription)}`,
      `date: ${yamlString(created)}`,
      `lastModified: ${yamlString(lastModified)}`,
      `author: ${yamlString(author)}`,
      `tags: [${tags.map(yamlString).join(', ')}]`,
    ];
    if (hasLocalImage) fm.push(`featuredImage: ${yamlString(`/blog/${safeSlug(slug)}.webp`)}`);
    fm.push('---', '');

    const fileContent = fm.join('\n') + '\n' + markdown.trim() + '\n';
    fs.writeFileSync(path.join(outDir, `${slug}.md`), fileContent, 'utf8');
    written++;
    console.log(`  ✓ ${slug}${hasLocalImage ? '' : '  (no local image)'}`);
  }

  console.log(`\nDone. Wrote ${written} files to content/blog/`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
