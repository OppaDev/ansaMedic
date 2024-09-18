// /components/CloudinaryImage.tsx
import Image from 'next/image'
import { buildUrl } from 'cloudinary-build-url'

export function CloudinaryImage({ publicId, alt, width, height }) {
  const url = buildUrl(publicId, {
    cloud: {
      cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    },
    // puedes agregar transformaciones aquí
  })

  return (
    <Image
      width={width}
      height={height}
      src={url}
      alt={alt}
    />
  )
}