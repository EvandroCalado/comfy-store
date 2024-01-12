import { Store } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { parseCookies } from 'nookies';
import toast from 'react-hot-toast';
import { redirect } from 'react-router-dom';
import { clearCart } from '../../features/cart/cartSlice';
import { RootState } from '../../store';
import { customFetch } from '../../utils';

export const orderAction =
  (store: Store) =>
  async ({ request }: { request: Request }) => {
    const formData = await request.formData();
    const { name, address } = Object.fromEntries(formData);
    const user = (store.getState() as RootState).userState.user!;
    const { cartItems, orderTotal, numItemsInCart } = (
      store.getState() as RootState
    ).cartState;

    if (!name || !address) {
      toast.error('Name and address are required');
      return null;
    }

    const { '@token': token } = parseCookies();

    if (!token) {
      toast.error('You must be logged in to place an order');
      return null;
    }

    try {
      await customFetch.post(
        '/orders',
        {
          data: {
            name,
            address,
            cartItems,
            orderTotal,
            numItemsInCart,
            user: user.id,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      store.dispatch(clearCart());
      toast.success('Order placed successfully');

      return redirect('/orders');
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
