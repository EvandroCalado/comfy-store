import { TypeFeatured } from '../types/type-featured';
import { customFetch } from '../utils';

const url = '/products?populate=*&filters[featured][$eq]=true';

export const landingLoader = async () => {
  const response = await customFetch(url);
  const produtcs: TypeFeatured = response.data;
  return produtcs;
};
