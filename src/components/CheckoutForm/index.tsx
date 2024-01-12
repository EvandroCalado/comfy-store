import { Form } from 'react-router-dom';
import { Button, Input } from '..';

export const CheckoutForm = () => {
  return (
    <Form method="POST" className="flex flex-col gap-y-4">
      <h4 className="text-xl font-medium capitalize">shipping information</h4>

      <Input label="First Name" name="name" type="text" />
      <Input label="Address" name="address" type="text" />

      <div className="mt-4">
        <Button type="submit" className="uppercase">
          place your order
        </Button>
      </div>
    </Form>
  );
};
