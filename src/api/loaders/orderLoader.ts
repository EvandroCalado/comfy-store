import { Store } from '@reduxjs/toolkit';
import { QueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { parseCookies } from 'nookies';
import toast from 'react-hot-toast';
import { redirect } from 'react-router-dom';
import { RootState } from '../../store';
import { TypeOrder } from '../../types/type-order';
import { customFetch } from '../../utils';

const ordersQeury = (params: string, token: string) => {
  return {
    queryKey: ['ordersQuery', params, token],
    queryFn: () =>
      customFetch(`/orders${params}`, {
        headers: { Authorization: `Bearer ${token}` },
      }),
  };
};

export const orderLoader =
  (store: Store, queryClient: QueryClient) =>
  async ({ request }: { request: Request }) => {
    const user = (store.getState() as RootState).userState.user;

    if (!user) {
      toast.error('You must logged in to checkout');
      return redirect('/login');
    }

    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    const orderFilter = `?populate=*&filters[user][id][$eq]=${user.id}`;
    const sortFilter = '&sort[0]=id:desc';
    const pagination = params.page
      ? `&pagination[page]=${params.page}&pagination[pageSize]=6`
      : `&pagination[page]=1&pagination[pageSize]=6`;

    const { '@token': token } = parseCookies();

    try {
      const { data }: { data: TypeOrder } = await queryClient.ensureQueryData(
        ordersQeury(`${orderFilter}${sortFilter}${pagination}`, token),
      );

      return {
        orders: data,
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
