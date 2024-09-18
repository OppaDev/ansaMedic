// /types/cloudinary.ts

export type CloudinaryCollection = 
  | 'HeroSection'

export interface CloudinaryImage {
  public_id: string;
  secure_url: string;
  // ... otros campos
}