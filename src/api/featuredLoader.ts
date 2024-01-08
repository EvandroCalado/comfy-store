import { Params } from 'react-router-dom';
import { TypeProduct } from '../types/type-product';
import { customFetch } from '../utils';

export const featuredLoader = async ({ params }: { params: Params }) => {
  const response = await customFetch(`/products/${params.id}?populate=*`);
  const product: TypeProduct = response.data as TypeProduct;

  return { product };
};
