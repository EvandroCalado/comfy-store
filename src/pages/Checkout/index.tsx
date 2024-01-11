import { useSelector } from 'react-redux';
import { CartTotals, CheckoutForm, SectionTitle } from '../../components';
import { RootState } from '../../store';

export const Checkout = () => {
  const cartTotal = useSelector(
    (state: RootState) => state.cartState.cartTotal,
  );

  if (cartTotal === 0) {
    return <SectionTitle>Your cart is empty</SectionTitle>;
  }

  return (
    <>
      <SectionTitle>Place your order</SectionTitle>

      <div className="mt-8 grid items-start gap-8 md:grid-cols-2">
        <CheckoutForm />
        <CartTotals />
      </div>
    </>
  );
};
