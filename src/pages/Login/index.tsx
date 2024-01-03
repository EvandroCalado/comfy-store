import { Form, Link } from 'react-router-dom';
import { Button, Input } from '../../components';

export const Login = () => {
  return (
    <section className="grid h-screen place-items-center">
      <Form
        method="POST"
        className="card flex w-96 flex-col gap-y-4 bg-base-100 p-8 shadow-lg"
      >
        <h4 className="text-center text-3xl font-bold">Login</h4>

        <Input
          label="Email"
          type="email"
          name="identifier"
          defaultValue="test@gmail.com"
        />

        <Input
          label="Password"
          type="password"
          name="password"
          defaultValue="secret"
        />

        <Button type="submit" className="mt-4">
          Login
        </Button>

        <Button type="button" className="btn btn-secondary">
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
