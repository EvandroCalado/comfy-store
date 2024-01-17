import { parseCookies } from 'nookies';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { GenerateOptions } from '../../components';
import { addItem } from '../../features/cart/cartSlice';
import { RootState } from '../../store';
import { TypeProduct } from '../../types/type-product';
import { customFetch } from '../../utils';

export const Product = () => {
  const [loading, setLoading] = useState(false);
  const [amount, setAmount] = useState(1);
  const user = useSelector((state: RootState) => state.userState.user);
  const { product, isOnWishlist, wishlistId } = useLoaderData() as {
    product: TypeProduct;
    isOnWishlist: boolean;
    wishlistId: number;
  };

  const { image, title, company, price, description, colors } =
    product.data.attributes;

  const [productColor, setProductColor] = useState(colors[0]);

  const navigate = useNavigate();

  const handleAmount = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setAmount(Number(e.target.value));
  };

  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      addItem({
        product: {
          cartID: product.data.id + productColor,
          productID: product.data.id,
          image: image.data.attributes.formats.small.url,
          title,
          price,
          company,
          productColor,
          amount,
        },
      }),
    );
  };

  const handleAddToWishlist = async () => {
    setLoading(true);

    const { '@token': token } = parseCookies();

    await customFetch.post(
      '/wishlists',
      {
        data: {
          user: user?.id,
          product: product.data.id,
        },
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    );

    setLoading(false);
    navigate(0);
  };

  const handleDelete = async (id: number) => {
    setLoading(true);

    const { '@token': token } = parseCookies();

    await customFetch.delete(`/wishlists/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    setLoading(false);
    navigate(0);
  };

  return (
    <section>
      <div className="breadcrumbs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>
      {/* product */}
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        {/* image */}
        <img
          src={image.data.attributes.url}
          alt={title}
          className="h-96 w-full rounded-lg object-cover "
        />
        {/* details */}
        <div>
          <h1 className="text-3xl font-bold capitalize">{title}</h1>
          <h4 className="mt-2 text-xl font-bold text-neutral-content">
            {company}
          </h4>
          <p className="mt-3 text-xl">R${price}</p>
          <p className="mt-6 leading-8">{description}</p>
          {/* colors */}
          <div className="mt-6">
            <h4 className="font-medium capitalize tracking-wider">colors</h4>
            <div className="mt-2">
              {colors.map((color) => (
                <button
                  key={color}
                  type="button"
                  className={`badge mr-2 h-6 w-6 ${
                    color === productColor && 'border-2 border-secondary'
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() => setProductColor(color)}
                ></button>
              ))}
            </div>
          </div>
          {/* amount */}
          <div className="form-control w-full max-w-xs">
            <label className="label" htmlFor="amount">
              <h4 className="font-medium capitalize tracking-wider">Amount</h4>
            </label>
            <select
              id="amount"
              className="select select-bordered select-secondary select-md"
              value={amount}
              onChange={handleAmount}
            >
              {GenerateOptions(20)}
            </select>
          </div>
          {/* cart button */}
          <div className="mt-10 flex items-center gap-x-16">
            <button className="btn btn-secondary btn-md" onClick={addToCart}>
              Add to cart
            </button>

            {/* wishlist button */}
            {isOnWishlist ? (
              <button
                className="btn btn-secondary btn-md"
                disabled={loading}
                onClick={() => handleDelete(wishlistId)}
              >
                {loading ? 'Removing...' : 'Remove to wishlist'}
              </button>
            ) : (
              <button
                className="btn btn-secondary btn-md"
                disabled={loading}
                onClick={handleAddToWishlist}
              >
                {loading ? 'Adding...' : 'Add to wishlist'}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
