import { TypeProducts } from '../types/type-products';
import { customFetch } from '../utils';

export const productsLoader = async (/*{ request }*/) => {
  const response = await customFetch('/products?populate=*');
  const products: TypeProducts = response.data;
  return products;
};
