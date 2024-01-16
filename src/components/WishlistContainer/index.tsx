import { useLoaderData } from 'react-router-dom';
import { TypeWishlist } from '../../types/type-wishlist';
import { WishlistGrid } from '../WishlistGrid';

export const WishlistContainer = () => {
  const { meta } = useLoaderData() as {
    wishlist: TypeWishlist;
    meta: TypeWishlist['meta'];
  };

  const { total } = meta.pagination;

  return (
    <>
      <h4 className="mt-4 font-medium">
        {total} product{total > 1 && 's'}
      </h4>

      <WishlistGrid />
    </>
  );
};
