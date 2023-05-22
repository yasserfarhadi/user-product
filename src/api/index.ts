import axios from 'axios';
import { Users } from './models/users';
import { Products } from './models/products';

const HTTPRequest = axios.create({
  baseURL: 'https://fakestoreapi.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchUsers = async () => {
  const response = await HTTPRequest.get<Users>('/users');
  return response.data;
};
export const fetchProducts = async () => {
  const response = await HTTPRequest.get<Products>('/products');
  return response.data;
};
