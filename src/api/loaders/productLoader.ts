import { Store } from '@reduxjs/toolkit';
import { QueryClient } from '@tanstack/react-query';
import { parseCookies } from 'nookies';
import { Params } from 'react-router-dom';
import { RootState } from '../../store';
import { TypeProduct } from '../../types/type-product';
import { TypeWishlist } from '../../types/type-wishlist';
import { customFetch } from '../../utils';

const productQuery = (id: string) => {
  return {
    queryKey: ['productQuery', id],
    queryFn: () => customFetch(`/products/${id}?populate=*`),
  };
};

const wishlistButtonQuery = (id: number, token: string) => {
  return {
    queryKey: ['wishlistQuery', id, token],
    queryFn: () =>
      customFetch(`/wishlists?populate=*&filters[user][id][$eq]=${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      }),
  };
};

export const productLoader =
  (store: Store, queryClient: QueryClient) =>
  async ({ params }: { params: Params }) => {
    const user = (store.getState() as RootState).userState.user;

    const response = await queryClient.ensureQueryData(
      productQuery(params.id!),
    );
    const product: TypeProduct = response.data as TypeProduct;

    if (user) {
      const { '@token': token } = parseCookies();

      const { data }: { data: TypeWishlist } =
        await queryClient.ensureQueryData(
          wishlistButtonQuery(user?.id!, token),
        );

      const isOnWishlist = data?.data?.some(
        (list) => list.attributes.product.data.id === product.data.id,
      );

      const wishlistId = data?.data.filter(
        (list) => list.attributes.product.data.id === product.data.id,
      );

      return { product, isOnWishlist, wishlistId: wishlistId[0]?.id };
    }

    return { product };
  };
