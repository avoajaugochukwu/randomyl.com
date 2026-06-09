import 'server-only';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { format } from 'date-fns';

const POSTS_DIR = path.join(process.cwd(), 'content', 'blog');

export type PostFrontmatter = {
  title: string;
  slug: string;
  excerpt: string;
  metaDescription: string;
  date: string;
  lastModified: string;
  author: string;
  tags: string[];
  featuredImage?: string;
};

export type PostMeta = PostFrontmatter & {
  id: string;
  formattedDate: string;
  readingTime: string;
  featuredImageUrl: string;
};

export type Post = PostMeta & {
  content: string;
};

function safeSlug(slug: string): string {
  return slug
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function readingTimeFor(content: string): string {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.ceil(words / 200))} min read`;
}

function toMeta(slug: string, data: Record<string, unknown>, content: string): PostMeta {
  const fm = data as Partial<PostFrontmatter>;
  const date = fm.date || new Date(0).toISOString();
  return {
    id: slug,
    slug: fm.slug || slug,
    title: fm.title || 'Untitled Post',
    excerpt: fm.excerpt || '',
    metaDescription: fm.metaDescription || fm.excerpt || '',
    date,
    lastModified: fm.lastModified || date,
    author: fm.author || 'Randomyl Team',
    tags: Array.isArray(fm.tags) ? fm.tags : [],
    featuredImage: fm.featuredImage,
    featuredImageUrl: fm.featuredImage || `/blog/${safeSlug(fm.slug || slug)}.webp`,
    formattedDate: format(new Date(date), 'MMMM d, yyyy'),
    readingTime: readingTimeFor(content),
  };
}

export function getPostSlugs(): string[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''));
}

export function getAllPosts(): PostMeta[] {
  return getPostSlugs()
    .map((slug) => {
      const raw = fs.readFileSync(path.join(POSTS_DIR, `${slug}.md`), 'utf8');
      const { data, content } = matter(raw);
      return toMeta(slug, data, content);
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): Post | null {
  const filePath = path.join(POSTS_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(raw);
  return { ...toMeta(slug, data, content), content };
}
