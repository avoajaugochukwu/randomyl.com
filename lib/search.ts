import 'server-only';
import { tools } from '@/app/config/tools';
import { variantHubs } from '@/app/config/toolVariants';
import { getAllPosts } from '@/lib/posts';

export type SearchItemType = 'tool' | 'variant' | 'post';

export interface SearchItem {
  type: SearchItemType;
  title: string;
  description: string;
  href: string;
  /** Pre-lowercased haystack of every term worth matching against. */
  keywords: string;
}

const TYPE_LABEL: Record<SearchItemType, string> = {
  tool: 'Tool',
  variant: 'Variant',
  post: 'Blog',
};

export function searchTypeLabel(type: SearchItemType): string {
  return TYPE_LABEL[type];
}

/**
 * Build the unified, serializable search index covering generators, their
 * variant landing pages, and blog posts. Runs on the server (posts read from
 * disk); the result is plain JSON safe to hand to a client component.
 */
export function buildSearchIndex(): SearchItem[] {
  const items: SearchItem[] = [];

  for (const tool of tools) {
    if (tool.comingSoon) continue;
    items.push({
      type: 'tool',
      title: tool.label,
      description: tool.description,
      href: `/tools/${tool.route}`,
      keywords: [tool.label, tool.description, tool.key, tool.route.replace(/-/g, ' ')]
        .join(' ')
        .toLowerCase(),
    });
  }

  for (const hub of variantHubs) {
    for (const variant of hub.variants) {
      items.push({
        type: 'variant',
        title: variant.h1,
        description: variant.description,
        href: `/tools/${hub.hubRoute}/${variant.slug}`,
        keywords: [variant.h1, variant.metaTitle, variant.description, hub.hubLabel, variant.slug.replace(/-/g, ' ')]
          .join(' ')
          .toLowerCase(),
      });
    }
  }

  for (const post of getAllPosts()) {
    items.push({
      type: 'post',
      title: post.title,
      description: post.excerpt || post.metaDescription,
      href: `/blog/${post.slug}`,
      keywords: [post.title, post.excerpt, post.metaDescription, ...post.tags]
        .join(' ')
        .toLowerCase(),
    });
  }

  return items;
}
