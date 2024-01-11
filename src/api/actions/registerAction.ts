import { AxiosError } from 'axios';
import toast from 'react-hot-toast';
import { redirect } from 'react-router-dom';
import { customFetch } from '../../utils';

export const registerAction = async ({ request }: { request: Request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.post('/auth/local/register', data);
    toast.success('Registered successfully');
    return redirect('/login');
  } catch (error) {
    if (error instanceof AxiosError) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      const errorMessage = error?.response?.data?.error?.message as string;
      toast.error(errorMessage);
      return null;
    }
  }
};
