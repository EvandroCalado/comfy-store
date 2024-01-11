import { Form, Link } from 'react-router-dom';
import { Button, Input } from '../../components';

export const Register = () => {
  return (
    <section className="grid h-screen place-items-center">
      <Form
        method="POST"
        className="card flex w-96 flex-col gap-y-4 bg-base-100 p-8 shadow-lg"
      >
        <h4 className="text-center text-3xl font-bold">Register</h4>

        <Input type="text" label="Username" name="username" />
        <Input type="email" label="Email" name="email" />
        <Input type="password" label="Password" name="password" />

        <Button type="submit" className="mt-4">
          Register
        </Button>

        <p className="text-center">
          Already a member?{' '}
          <Link to="/login" className="link-hover link-primary ml-2 capitalize">
            login
          </Link>
        </p>
      </Form>
    </section>
  );
};
