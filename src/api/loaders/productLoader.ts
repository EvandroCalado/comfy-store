import { QueryClient } from '@tanstack/react-query';
import { Params } from 'react-router-dom';
import { TypeProduct } from '../../types/type-product';
import { customFetch } from '../../utils';

const productQuery = (id: string) => {
  return {
    queryKey: ['productQuery', id],
    queryFn: () => customFetch(`/products/${id}?populate=*`),
  };
};

export const productLoader =
  (queryClient: QueryClient) =>
  async ({ params }: { params: Params }) => {
    const response = await queryClient.ensureQueryData(
      productQuery(params.id!),
    );
    const product: TypeProduct = response.data as TypeProduct;

    return { product };
  };
