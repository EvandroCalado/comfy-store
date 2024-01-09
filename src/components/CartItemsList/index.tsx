import { useSelector } from 'react-redux';
import { CartItem } from '..';
import { RootState } from '../../store';

export const CartItemsList = () => {
  const cartItems = useSelector(
    (state: RootState) => state.cartState.cartItems,
  );

  return (
    <>
      {cartItems.map((item) => (
        <CartItem key={item.cartID} cartItem={item} />
      ))}
    </>
  );
};
