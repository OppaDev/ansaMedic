import React, { useState } from 'react';
import ProductCard from './ProductCard';
import  PoductsData from '../../../public/json/products/products.json';

export default function ProductList() {
  const [products] = useState(PoductsData.products);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {products.map(product => (
        <ProductCard
          imageUrl={product.imageUrl}
          name={product.name}
          description={product.description}
        />
      ))}
    </div>
  )
}