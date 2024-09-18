// /config/cloudinary.ts
import { v2 as cloudinary } from 'cloudinary'
import HeroSection from '../components/home/HeroSection';

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  collections: {
    hero_section: HeroSection,
    // ... otras colecciones
  }
});

export default cloudinary;