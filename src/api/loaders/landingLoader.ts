import { TypeProducts } from '../../types/type-products';
import { customFetch } from '../../utils';

const url = '/products?populate=*&filters[featured][$eq]=true';

export const landingLoader = async () => {
  const response = await customFetch(url);
  const products = response.data as TypeProducts;
  return { products };
};
