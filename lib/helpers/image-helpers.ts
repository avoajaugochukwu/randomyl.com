/**
 * Helper function to create safe filenames for images
 */
export function getSafeSlug(slug: string): string {
  return slug
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

/**
 * Get the URL for a blog image by slug
 * @param slug The blog post slug
 * @returns The image URL path
 */
export function getBlogImageUrl(slug: string): string {
  // Return path to image in public folder
  return `/blog/${getSafeSlug(slug)}.webp`;
}

/**
 * Check if a blog image exists for a slug
 * This is a client-side only function
 * @param slug The blog post slug
 * @returns Promise that resolves to true if image exists
 */
export async function checkImageExists(slug: string): Promise<boolean> {
  if (typeof window === 'undefined') return true;
  
  const url = getBlogImageUrl(slug);
  try {
    const response = await fetch(url, { method: 'HEAD' });
    return response.ok;
  } catch (error) {
    console.error(`Error checking image existence for ${slug}:`, error);
    return false;
  }
} 