import React, { useState } from 'react';
import ProductCard from './ProductCard';
import ProductsData from '../../../public/json/products/products.json';


export default function ProductList() {
  const [currentPage, setCutrrntPage] = useState(1);
  const prodictPerPage = 6; // cambiar este valor segun los productos a mostrar
  const [products] = useState(ProductsData.products);

  //productos a mostrar
  const indexOfLastProduct = currentPage * prodictPerPage;
  const indexOfFirstProduct = indexOfLastProduct - prodictPerPage;
  const currentProducts = ProductsData.products.slice(indexOfFirstProduct, indexOfLastProduct);

  //total de paginas
  const totalPages = Math.ceil(ProductsData.products.length / prodictPerPage);

  //cambiar de pagina
  const handlePageChange = (pageNumber: number) => {
    setCutrrntPage(pageNumber);
  }

  return (
    <div className="container mx-auto px-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {currentProducts.map(product => (
          <ProductCard
            key={product.id}
            imageUrl={product.imageUrl}
            name={product.name}
            description={product.description}
          />
        ))}
      </div>
      
      {/* Controles de paginación */}
      <div className="flex justify-center items-center space-x-2 pb-8">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded ${
            currentPage === 1 
            ? 'bg-gray-300 cursor-not-allowed' 
            : 'bg-teal-600 text-white hover:bg-teal-700'
          }`}
        >
          Anterior
        </button>
        
        {/* Números de página */}
        <div className="flex space-x-2">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`px-4 py-2 rounded ${
                currentPage === index + 1
                ? 'bg-teal-600 text-white'
                : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
        
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded ${
            currentPage === totalPages 
            ? 'bg-gray-300 cursor-not-allowed' 
            : 'bg-teal-600 text-white hover:bg-teal-700'
          }`}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}