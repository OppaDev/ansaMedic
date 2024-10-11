
import { useState, useEffect, useCallback } from 'react';
import { Product, CreateProductInput, UpdateProductInput } from '../types/product';
import { getProducts, createProduct, updateProduct as updateProductApi, deleteProduct, handleApiError } from '../services/api';
import { ApiResponse } from '../types/api';

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);
      const response = await getProducts();
      setProducts(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch products');
      handleApiError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const addProduct = async (productData: CreateProductInput): Promise<Product | undefined> => {
    try {
      const response = await createProduct(productData);
      setProducts(prevProducts => [...prevProducts, response.data]);
      return response.data;
    } catch (err) {
      setError('Failed to add product');
      handleApiError(err);
    }
  };

  const updateProduct = async (id: string, productData: UpdateProductInput): Promise<Product | undefined> => {
    try {
      const response: ApiResponse<Product> = await updateProductApi(id, productData);
      setProducts(prevProducts =>
        prevProducts.map(product => product.id === id ? response.data : product)
      );
      return response.data;
    } catch (err) {
      setError('Failed to update product');
      handleApiError(err);
    }
  };

  const removeProduct = async (id: string): Promise<void> => {
    try {
      await deleteProduct(id);
      setProducts(prevProducts => prevProducts.filter(product => product.id !== id));
    } catch (err) {
      setError('Failed to delete product');
      handleApiError(err);
    }
  };

  return {
    products,
    loading,
    error,
    fetchProducts,
    addProduct,
    updateProduct,
    removeProduct
  };
};