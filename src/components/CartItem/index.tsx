import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { GenerateOptions } from '..';
import {
  ProductProps,
  editItem,
  removeItem,
} from '../../features/cart/cartSlice';

interface CartItemProps {
  cartItem: ProductProps;
}

export const CartItem: FC<CartItemProps> = ({ cartItem }) => {
  const dispatch = useDispatch();
  const { cartID, title, price, image, amount, company, productColor } =
    cartItem;

  const removeItemsFromCart = () => {
    dispatch(removeItem({ cartID }));
  };

  const handleAmount = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(editItem({ cartID, amount: Number(e.target.value) }));
  };

  return (
    <article
      key={cartID}
      className="mb-12 flex flex-col flex-wrap gap-y-4 border-b border-base-300 pb-6 last:border-b-0 sm:flex-row"
    >
      {/* image */}
      <img
        src={image}
        alt={title}
        className="h-24 w-24 rounded-lg object-cover sm:h-32 sm:w-32"
      />

      {/* info */}
      <div className="sm:ml-16 sm:w-48">
        {/* title */}
        <Link
          to={`/products/${cartID.split('#')[0]}`}
          className="link-hover link link-primary font-medium capitalize"
        >
          {title}
        </Link>
        {/* company */}
        <h4 className="mt-2 text-sm capitalize text-neutral-content">
          {company}
        </h4>
        {/* color */}
        <p className="mt-4 flex items-center gap-x-2 text-sm capitalize">
          color:{' '}
          <span
            className="badge badge-sm"
            style={{ backgroundColor: productColor }}
          ></span>
        </p>
      </div>

      <div className="sm:ml-12">
        {/* amount */}
        <div className="form-control max-w-xs">
          <label htmlFor="amount" className="label p-0">
            <span className="label-text">Amount</span>
          </label>
          <select
            name="amount"
            id="amount"
            value={amount}
            onChange={handleAmount}
            className="select-base select select-bordered select-xs mt-2"
          >
            {GenerateOptions(amount + 5)}
          </select>
        </div>
        {/* remove */}
        <button
          className="link-hover link link-primary mt-2 text-sm"
          onClick={removeItemsFromCart}
        >
          Remove
        </button>
      </div>

      {/* price */}
      <p className="font-medium sm:ml-auto">R${price}</p>
    </article>
  );
};
