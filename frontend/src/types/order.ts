// types/order.ts

import { Product } from './product';
import { User } from './user';

export interface OrderItem {
  product: Product;
  quantity: number;
  price: number;
}

export interface Order {
  id: string;
  user: User;
  items: OrderItem[];
  totalAmount: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  shippingAddress: Address;
  paymentMethod: 'credit_card' | 'paypal' | 'bank_transfer';
  createdAt: Date;
  updatedAt: Date;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
}

// Modificamos CreateOrderInput para que sea más flexible
export interface CreateOrderInput {
  userId?: string; // Hacemos esto opcional, el backend puede manejarlo si es necesario
  items: {
    productId: string;
    quantity: number;
    price: number;
  }[];
  totalAmount: number;
  shippingAddress?: Address; // Hacemos la dirección opcional para este caso
  paymentMethod?: 'credit_card' | 'paypal' | 'bank_transfer'; // Método de pago opcional
  status?: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled'; // Estado opcional, el backend puede establecer un valor por defecto
}