import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Product {
  name: string;
  image: string;
  slug: string;
}

interface FeaturedProductsProps {
  products: Product[];
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ products }) => {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-semibold mb-12 text-center text-teal-600">Productos Destacados</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.slug} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
            <div className="relative w-full pt-[66.67%]">
              <Image
                src={product.image}
                alt={product.name}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-teal-600">{product.name}</h3>
              <p className="text-gray-600 mb-4">Calidad superior para tu práctica diaria</p>
              <Link href={`/productos/${product.slug}`} className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded transition duration-300">
                Ver detalles
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;