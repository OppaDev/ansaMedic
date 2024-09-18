// /hooks/useCloudinaryCollection.ts

import { useState, useEffect } from 'react';
import { CloudinaryCollection, CloudinaryImage } from '../types/cloudinary';

export function useCloudinaryCollection(collection: CloudinaryCollection) {
  const [images, setImages] = useState<CloudinaryImage[]>([]);

  useEffect(() => {
    async function fetchImages() {
      const res = await fetch(`/api/getCloudinaryImages?collection=${collection}`);
      const data = await res.json();
      setImages(data);
    }
    fetchImages();
  }, [collection]);

  return images;
}