// hooks/useCloudinaryImages.ts
import { useState, useEffect } from 'react';

interface CloudinaryImage {
  public_id: string;
  secure_url: string;
}

export const useCloudinaryImages = (collectionName: string) => {
  const [images, setImages] = useState<CloudinaryImage[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(`/api/getCloudinaryImages?collection=${collectionName}`);
        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, [collectionName]);

  return images;
};