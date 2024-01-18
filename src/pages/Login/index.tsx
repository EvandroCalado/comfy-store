import { AxiosError } from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button, Input } from '../../components';
import { loginUser } from '../../features/user/userSlice';
import { customFetch } from '../../utils';

export const Login = () => {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await customFetch.post('/auth/local', {
        identifier,
        password,
      });

      dispatch(loginUser(response.data));
      toast.success('Logget in successfully');
      navigate(location.state?.from || '/', { replace: true });
    } catch (error) {
      if (error instanceof AxiosError) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        const errorMessage = error?.response?.data?.error?.message as string;
        toast.error(errorMessage);
        return null;
      }
    }
  };

  const loginAsGuest = async () => {
    try {
      const response = await customFetch.post('/auth/local', {
        identifier: 'guest@gmail.com',
        password: '123456',
      });

      dispatch(loginUser(response.data));
      toast.success('Logget in successfully');
      navigate(location.state?.from || '/', { replace: true });
    } catch (error) {
      if (error instanceof AxiosError) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        const errorMessage = error?.response?.data?.error?.message as string;
        toast.error(errorMessage);
        return null;
      }
    }
  };

  return (
    <section className="grid h-screen place-items-center">
      <form
        onSubmit={handleLogin}
        className="card flex w-96 flex-col gap-y-4 bg-base-100 p-8 shadow-lg"
      >
        <h4 className="text-center text-3xl font-bold">Login</h4>

        <Input
          label="Email"
          type="email"
          name="identifier"
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
        />

        <Input
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button type="submit" className="mt-4">
          Login
        </Button>

        <Button
          type="button"
          className="btn btn-secondary"
          onClick={loginAsGuest}
        >
          Guest User
        </Button>

        <p className="text-center">
          Not a member yet?{' '}
          <Link
            to="/register"
            className="link-hover link link-primary ml-2 capitalize"
          >
            Register
          </Link>
        </p>
      </form>
    </section>
  );
};
