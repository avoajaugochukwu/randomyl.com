"use server";

import { localImageService } from "../services/local-image.service";

/**
 * Get image URL by slug
 */
export async function getImageUrlBySlug(slug: string): Promise<string> {
  try {
    return localImageService.getImageUrl(slug);
  } catch (error) {
    console.error('Error getting image URL:', error);
    return 'https://placehold.co/600x400';
  }
} 