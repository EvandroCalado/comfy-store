import { useLoaderData } from 'react-router-dom';
import { PaginationContainer, SectionTitle } from '../../components';
import { WishlistContainer } from '../../components/WishlistContainer';
import { TypeWishlist } from '../../types/type-wishlist';

export const Wishlist = () => {
  const { meta } = useLoaderData() as { meta: TypeWishlist['meta'] };

  if (meta.pagination.total < 1) {
    return (
      <SectionTitle className={`h-[55vh]`}>No items in wishlist</SectionTitle>
    );
  }

  return (
    <>
      <SectionTitle>Wishlist</SectionTitle>
      <WishlistContainer />
      <PaginationContainer />
    </>
  );
};
