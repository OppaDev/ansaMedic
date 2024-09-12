// hooks/useCart.ts

import { useState, useEffect, useCallback } from 'react';
import { CartItem } from '../types/cart';
import { Product } from '../types/product';

export const useCart = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = useCallback((product: Product, quantity: number = 1) => {
    setCart(currentCart => {
      const existingItem = currentCart.find(item => item.product.id === product.id);
      if (existingItem) {
        return currentCart.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...currentCart, { product, quantity }];
    });
  }, []);

  const removeFromCart = useCallback((productId: string) => {
    setCart(currentCart => currentCart.filter(item => item.product.id !== productId));
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    setCart(currentCart =>
      currentCart.map(item =>
        item.product.id === productId
          ? { ...item, quantity: Math.max(0, quantity) }
          : item
      ).filter(item => item.quantity > 0)
    );
  }, []);

  const clearCart = useCallback(() => {
    setCart([]);
    localStorage.removeItem('cart');
  }, []);

  const getTotalPrice = useCallback(() => {
    return cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
  }, [cart]);

  const sendToWhatsApp = () => {
    let message = "Nuevo pedido:\n\n";
    cart.forEach(item => {
      message += `${item.product.name} - Cantidad: ${item.quantity} - Precio: $${item.product.price * item.quantity}\n`;
    });
    message += `\nTotal: $${getTotalPrice()}`;

    // Número de WhatsApp de la tienda (reemplaza con el número real)
    const phoneNumber = "1234567890";
    
    // Codifica el mensaje para la URL
    const encodedMessage = encodeURIComponent(message);
    
    // Crea el enlace de WhatsApp
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Abre WhatsApp en una nueva pestaña
    window.open(whatsappLink, '_blank');
  };

  return {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalPrice,
    sendToWhatsApp
  };
};