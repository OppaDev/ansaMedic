// pages/api/getCloudinaryImages.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import cloudinary from '../../config/cloudinary';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { collection } = req.query;

  if (!collection || typeof collection !== 'string') {
    return res.status(400).json({ error: 'Collection name is required' });
  }

  try {
    const result = await cloudinary.v2.api.resources({
      type: 'upload',
      prefix: `${collection}/`, // Asegúrate de que esto coincida con la estructura de tu colección en Cloudinary
      max_results: 10, // Ajusta según sea necesario
    });

    res.status(200).json(result.resources);
  } catch (error) {
    console.error('Error fetching Cloudinary images:', error);
    res.status(500).json({ error: 'Error fetching images' });
  }
}