import { parseCookies } from 'nookies';
import { useEffect, useState } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { TypeWishlist } from '../../types/type-wishlist';
import { customFetch } from '../../utils';

export const WishlistGrid = () => {
  const [loading, setLoading] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);
  const { wishlist } = useLoaderData() as { wishlist: TypeWishlist };
  const navigate = useNavigate();

  const handleDelete = async (id: number) => {
    setLoading(true);
    const { '@token': token } = parseCookies();

    await customFetch.delete(`/wishlists/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    setLoading(false);
    return navigate('/wishlist', { replace: true });
  };

  useEffect(() => {
    if (wishlist.data.length > 0) {
      setImageLoading(false);
    }
  }, []);

  return (
    <div className="grid gap-4 pt-12 md:grid-cols-2 lg:grid-cols-3">
      {wishlist.data.map((list) => {
        const productId = list.attributes.product.data.id;
        const { image, title, description, price } =
          list.attributes.product.data.attributes;

        return (
          <div
            key={list.id}
            className="card w-80 bg-base-100 shadow-lg duration-300 hover:shadow-xl"
          >
            <figure className="px-5 pt-[30px]">
              <img
                src={image.data.attributes.formats.small.url}
                alt={title}
                className={`h-64 w-full rounded-lg object-cover transition duration-300 group-hover:scale-105 md:h-48 ${
                  imageLoading
                    ? 'scale-110 blur-3xl grayscale'
                    : 'scale-100 blur-0 grayscale-0'
                }`}
              />
            </figure>
            <div className="card-body">
              <Link
                to={`/products/${productId}`}
                className="link-hover card-title capitalize"
              >
                {title}
              </Link>
              <p className="line-clamp-2">{description}</p>
              <div className="card-actions flex items-center justify-between">
                <span className="font-medium">R${price.toFixed(2)}</span>
                <button
                  disabled={loading}
                  className="btn btn-error btn-sm capitalize text-base-100"
                  onClick={() => handleDelete(list.id)}
                >
                  {loading ? (
                    <>
                      removing
                      <div className="oading-spinner loading loading-xs"></div>
                    </>
                  ) : (
                    'remove'
                  )}
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
