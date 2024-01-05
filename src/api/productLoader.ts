import { Params } from 'react-router-dom';
import { TypeProduct } from '../types/type-product';
import { customFetch } from '../utils';

export const productLoader = async ({ params }: { params: Params }) => {
  const response = await customFetch(`/products/${params.id}?populate=*`);
  const product = response.data as TypeProduct;

  return product;
};
