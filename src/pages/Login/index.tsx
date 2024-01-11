import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { Form, Link, useNavigate } from 'react-router-dom';
import { Button, Input } from '../../components';
import { loginUser } from '../../features/user/userSlice';
import { customFetch } from '../../utils';

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginAsGuest = async () => {
    try {
      const response = await customFetch.post('/auth/local', {
        identifier: 'guest@gmail.com',
        password: '123456',
      });

      dispatch(loginUser(response.data));
      toast.success('Logget in successfully');
      navigate('/');
    } catch (error) {
      console.log(error);
      toast.error('Guest user login error. Please try again!');
    }
  };

  return (
    <section className="grid h-screen place-items-center">
      <Form
        method="POST"
        className="card flex w-96 flex-col gap-y-4 bg-base-100 p-8 shadow-lg"
      >
        <h4 className="text-center text-3xl font-bold">Login</h4>

        <Input label="Email" type="email" name="identifier" />

        <Input label="Password" type="password" name="password" />

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
      </Form>
    </section>
  );
};
