import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { CartItemsList, CartTotals, SectionTitle } from '../../components';
import { RootState } from '../../store';

export const Cart = () => {
  const user = useSelector((state: RootState) => state.userState.user);
  const numItemsInCart = useSelector(
    (state: RootState) => state.cartState.numItemsInCart,
  );

  if (numItemsInCart === 0) {
    return (
      <SectionTitle className={`h-[55vh]`}>Your cart is empty</SectionTitle>
    );
  }

  return (
    <>
      <SectionTitle>Shopping Cart</SectionTitle>
      <div className="mt-8 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <CartItemsList />
        </div>
        <div className="lg:col-span-4 lg:pl-4">
          <CartTotals />
          {user ? (
            <Link
              to="/checkout"
              className="btn btn-primary btn-block mt-8 uppercase"
            >
              proceed to checkout
            </Link>
          ) : (
            <Link
              to="/login"
              className="btn btn-primary btn-block mt-8 uppercase"
            >
              login to checkout
            </Link>
          )}
        </div>
      </div>
    </>
  );
};
