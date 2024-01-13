import { QueryClient } from '@tanstack/react-query';
import { TypeProducts } from '../../types/type-products';
import { customFetch } from '../../utils';

const landingProductsQuery = {
  queryKey: ['landingProducts'],
  queryFn: () =>
    customFetch('/products?populate=*&filters[featured][$eq]=true'),
};

export const landingLoader = (queryClient: QueryClient) => async () => {
  const response = await queryClient.ensureQueryData(landingProductsQuery);
  const products = response.data as TypeProducts;
  return { products };
};
