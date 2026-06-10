/* eslint-disable @typescript-eslint/no-explicit-any */
import { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/posts'
import { baseUrl } from './metadata';
import { tools } from './config/tools';
import { variantHubs } from './config/toolVariants';

// Define static routes directly
const staticRoutes = [
  '/',
  '/blog',
  '/about',
  '/contact',
  '/tools',
  '/privacy-policy', // Added based on Footer
  '/terms-of-service', // Added based on Footer
];

export default function sitemap(): MetadataRoute.Sitemap {
  const formattedDate = new Date().toISOString();

  // Get all blog posts from the filesystem
  const blogUrls = getAllPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.lastModified),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Generate URLs for static routes
  const routeUrls = staticRoutes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: formattedDate, // Use a fixed date for static pages or fetch specific dates if needed
    changeFrequency: 'weekly' as const,
    priority: path === '/' ? 1.0 : 0.8, // Give homepage highest priority
  }));

  // Generate URLs for tools

  const toolUrls = tools.map((tool: any) => ({
    url: `${baseUrl}/tools/${tool.route}`,
    lastModified: formattedDate,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  // Generate URLs for tool variant pages (long-tail fanout)
  const variantUrls = variantHubs.flatMap((hub) =>
    hub.variants.map((v) => ({
      url: `${baseUrl}/tools/${hub.hubRoute}/${v.slug}`,
      lastModified: formattedDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))
  );

  // Generate URLs for the "words that start with [letter]" word-list hub (A–Z)
  const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const wordListUrls = [
    {
      url: `${baseUrl}/words-that-start-with`,
      lastModified: formattedDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    ...letters.map((c) => ({
      url: `${baseUrl}/words-that-start-with/${c}`,
      lastModified: formattedDate,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ];

  // Combine static and dynamic URLs
  return [...routeUrls, ...blogUrls, ...toolUrls, ...variantUrls, ...wordListUrls];
}