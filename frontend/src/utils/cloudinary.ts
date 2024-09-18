// /utils/cloudinary.ts
import { buildUrl } from 'cloudinary-build-url'
import cloudinary from '../config/cloudinary';

export function getCloudinaryImageUrl(publicId: string) {
  return buildUrl(publicId, {
    cloud: {
      cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    },
  })
}

export async function getFeaturedProductImages() {
    const result = await cloudinary.v2.api.resources({
      type: 'upload',
      prefix: 'HeroSection/', // ajusta según tu estructura
      max_results: 10,
    });
    return result.resources;
  }
  
  export async function getBlogImages() {
    // ... similar a la función anterior
  }