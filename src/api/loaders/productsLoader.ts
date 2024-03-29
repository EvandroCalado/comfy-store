import { QueryClient } from '@tanstack/react-query';
import { TypeProducts } from '../../types/type-products';
import { customFetch } from '../../utils';

const productsQuery = (params: string) => {
  return {
    queryKey: ['productsQuqry', params],
    queryFn: () => customFetch(`/products?populate=*${params}`),
  };
};

export const productsLoader =
  (queryClient: QueryClient) =>
  async ({ request }: { request: Request }) => {
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    const searchFilter = params.search
      ? `&filters[title][$containsi]=${params.search}`
      : '';
    const categoryFilter = params.category
      ? `&filters[category][$eq]=${params.category}`
      : '';
    const companyFilter = params.company
      ? `&filters[company][$eq]=${params.company}`
      : '';
    const priceFilter = params.price
      ? `&filters[price][$lte]=${params.price}`
      : '';
    const orderFilter = params.order ? `&sort[0]=title:${params.order}` : '';
    const shippingFilter = params.shipping
      ? `&filters[shipping][$eq]=${params.shipping}`
      : '';
    const pagination = params.page
      ? `&pagination[page]=${params.page}&pagination[pageSize]=6`
      : `&pagination[page]=1&pagination[pageSize]=6`;

    const { data }: { data: TypeProducts } = await queryClient.ensureQueryData(
      productsQuery(
        `${searchFilter}${categoryFilter}${companyFilter}${orderFilter}${priceFilter}${shippingFilter}${pagination}`,
      ),
    );

    return { products: data, meta: data.meta, params };
  };
