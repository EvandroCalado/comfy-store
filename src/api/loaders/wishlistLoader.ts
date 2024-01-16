import { Store } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { parseCookies } from 'nookies';
import toast from 'react-hot-toast';
import { redirect } from 'react-router-dom';
import { RootState } from '../../store';
import { TypeWishlist } from '../../types/type-wishlist';
import { customFetch } from '../../utils';

export const wishlistLoader =
  (store: Store) =>
  async ({ request }: { request: Request }) => {
    const user = (store.getState() as RootState).userState.user;

    if (!user) {
      toast.error('You must logged in to view your wishlist');
      return redirect('/login');
    }

    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    const sort = '&sort=createdAt:desc';
    const pagination = params.page
      ? `&pagination[page]=${params.page}&pagination[pageSize]=6`
      : `&pagination[page]=1&pagination[pageSize]=6`;

    const { '@token': token } = parseCookies();

    try {
      const { data }: { data: TypeWishlist } = await customFetch.get(
        `/wishlists?populate[product][populate][0]=image&filters[user][id][$eq]=${user.id}${pagination}${sort}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );

      return {
        wishlist: data,
        meta: data.meta,
      };
    } catch (error) {
      if (error instanceof AxiosError) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        const errorMessage = error?.response?.data?.error?.message as string;
        toast.error(errorMessage);

        if (error.response?.status === 401 || error.response?.status === 403) {
          return redirect('/login');
        }
        return null;
      }
    }
  };
