import { Store } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import toast from 'react-hot-toast';
import { redirect } from 'react-router-dom';
import { loginUser } from '../../features/user/userSlice';
import { customFetch } from '../../utils';

export const loginAction =
  (store: Store) =>
  async ({ request }: { request: Request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    try {
      const response = await customFetch.post('/auth/local', data);
      store.dispatch(loginUser(response.data));
      toast.success('Logget in successfully');
      return redirect('/');
    } catch (error) {
      if (error instanceof AxiosError) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        const errorMessage = error?.response?.data?.error?.message as string;
        toast.error(errorMessage);
        return null;
      }
    }
  };
