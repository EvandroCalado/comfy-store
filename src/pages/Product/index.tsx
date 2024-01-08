import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { GenerateOptions } from '../../components';
import { TypeProduct } from '../../types/type-product';

export const Product = () => {
  const { product } = useLoaderData() as { product: TypeProduct };
  const { image, title, company, price, description, colors } =
    product.data.attributes;

  const [productColor, setProductColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const handleAmount = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setAmount(Number(e.target.value));
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
      {/* PRODUCT */}
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        {/* IMAGE */}
        <img
          src={image.data.attributes.url}
          alt={title}
          className="h-96 w-full rounded-lg object-cover"
        />
        {/* DETAILS */}
        <div>
          <h1 className="text-3xl font-bold capitalize">{title}</h1>
          <h4 className="mt-2 text-xl font-bold text-neutral-content">
            {company}
          </h4>
          <p className="mt-3 text-xl">R${price}</p>
          <p className="mt-6 leading-8">{description}</p>
          {/* COLORS */}
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
          {/* AMOUNT */}
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
          {/* CART BUTTON */}
          <div className="mt-10">
            <button
              className="btn btn-secondary btn-md"
              onClick={() => console.log('add')}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
