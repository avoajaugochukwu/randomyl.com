#!/usr/bin/env node
// Mine blog-intent (informational / listicle) keywords for randomyl.com tool clusters.
// Uses DataForSEO Labs keyword_suggestions (long-tails containing the seed) — KD is included free.
// Output: seo/blog-keywords.md  +  top picks printed to stdout.
import fs from 'node:fs';

const env = fs.readFileSync(new URL('../../.env', import.meta.url), 'utf8');
const get = k => (env.match(new RegExp('^' + k + '=(.*)$', 'm')) || [])[1]?.trim();
const auth = 'Basic ' + Buffer.from(get('DATAFORSEO_LOGIN') + ':' + get('DATAFORSEO_PASSWORD')).toString('base64');

// ROUND 2 — deeper modifiers for the clusters we just published + adjacent expansion.
const SEEDS = {
  'word-games':      ['words with friends cheat', 'wordle words', 'words ending in', '5 letter words', 'words with these letters', 'scrabble words'],
  'random-letter':   ['words that start with', 'cool words', 'aesthetic words', 'positive words that start with'],
  'random-animal':   ['animals that start with', 'cutest animals', 'fastest animals in the world', 'animals with no', 'extinct animals'],
  'random-color':    ['colors that go together', 'what does the color', 'color personality test', 'aura colors meaning'],
  'random-country':  ['fun facts about japan', 'fun facts about italy', 'fun facts about brazil', 'fun facts about egypt', 'fun facts about france'],
  'questions-games': ['this or that questions', 'never have i ever questions', '20 questions game', 'hot seat questions', 'trivia questions', 'most likely to questions'],
  'random-question': ['questions to ask a guy', 'questions to ask a girl', 'deep questions to ask', 'random questions to ask'],
  'decision-maker':  ['what should i eat', 'what to do when bored', 'fun things to do with friends'],
};

const LISTICLE = /\b(ideas?|list|lists|questions?|quotes?|facts?|examples?|names?|words?|categories|prompts?|tips|games?|activities|starters)\b/i;
const INFO = /\b(how|what|why|when|which|vs|versus|meaning|best|good|funny|for kids|for couples|for adults|to ask)\b/i;

const seeds = [];
for (const [cluster, list] of Object.entries(SEEDS))
  for (const s of list) seeds.push({ cluster, seed: s });

// keyword_suggestions/live accepts ONE task per POST — fire each seed separately, capped concurrency.
const post = ({ seed }) =>
  fetch('https://api.dataforseo.com/v3/dataforseo_labs/google/keyword_suggestions/live', {
    method: 'POST',
    headers: { Authorization: auth, 'Content-Type': 'application/json' },
    body: JSON.stringify([{
      keyword: seed,
      location_code: 2840,           // United States
      language_code: 'en',
      include_seed_keyword: false,
      limit: 100,
      filters: [['keyword_info.search_volume', '>=', 90]],
      order_by: ['keyword_info.search_volume,desc'],
    }]),
  }).then(r => r.json());

async function pool(items, n, fn) {
  const out = []; let i = 0;
  const workers = Array.from({ length: n }, async () => {
    while (i < items.length) { const idx = i++; out[idx] = await fn(items[idx]); }
  });
  await Promise.all(workers);
  return out;
}

console.log(`Posting ${seeds.length} seeds (one request each)...`);
const responses = await pool(seeds, 6, post);

let totalCost = 0;
const seen = new Set();
const rows = [];
responses.forEach((res, idx) => {
  totalCost += res.cost || 0;
  const cluster = seeds[idx].cluster;
  const task = res.tasks?.[0];
  if (task?.status_code !== 20000) {
    console.log(`  ! ${seeds[idx].seed}: ${task?.status_message || res.status_message}`);
    return;
  }
  for (const item of task.result?.[0]?.items || []) {
    const kw = item.keyword;
    if (seen.has(kw)) continue;
    seen.add(kw);
    const vol = item.keyword_info?.search_volume || 0;
    const kd = item.keyword_properties?.keyword_difficulty;
    const comp = item.keyword_info?.competition_level || '';
    const isBlog = LISTICLE.test(kw) || INFO.test(kw);
    // skip the bare "X generator" / tool-intent terms — those are already mapped
    const isTool = /\bgenerator|wheel|randomizer|picker|spinner\b/i.test(kw);
    if (!isBlog || isTool) continue;
    rows.push({ cluster, kw, vol, kd: kd ?? '', comp });
  }
});

// Rank: blog-shaped, low KD, decent volume. Score = vol weighted, KD penalty.
rows.sort((a, b) => {
  const ka = a.kd === '' ? 50 : a.kd, kb = b.kd === '' ? 50 : b.kd;
  return (b.vol / (kb + 10)) - (a.vol / (ka + 10));
});

const byCluster = {};
for (const r of rows) (byCluster[r.cluster] ||= []).push(r);

let md = `# Blog-Intent Keywords ROUND 2 — randomyl.com (DataForSEO mined)\n\n`;
md += `Informational / listicle long-tails for the tool clusters being built. Tool-intent ("X generator") terms excluded. KD = organic difficulty. Sorted by opportunity (volume ÷ difficulty) within each cluster.\n\n`;
md += `**${rows.length} blog keywords** across ${Object.keys(byCluster).length} clusters · API cost $${totalCost.toFixed(4)}\n\n`;
for (const [cluster, list] of Object.entries(byCluster)) {
  const top = list.slice(0, 15);
  md += `## ${cluster}\n\n| Keyword | Vol/mo | KD | Comp |\n|---|--:|:--:|:--:|\n`;
  for (const r of top) md += `| ${r.kw} | ${r.vol.toLocaleString()} | ${r.kd} | ${r.comp} |\n`;
  md += `\n`;
}

fs.writeFileSync(new URL('../../seo/blog-keywords-2.md', import.meta.url), md);
console.log(`\nWrote seo/blog-keywords.md — ${rows.length} blog keywords.\n`);
console.log('=== TOP 30 BLOG OPPORTUNITIES (vol ÷ difficulty) ===');
for (const r of rows.slice(0, 30)) {
  console.log(`[${r.cluster}] ${r.kw} — ${r.vol.toLocaleString()}/mo · KD ${r.kd}`);
}
