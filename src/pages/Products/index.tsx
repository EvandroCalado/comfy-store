import {
  Filters,
  PaginationContainer,
  ProductsContainer,
} from '../../components';

export const Products = () => {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
};
