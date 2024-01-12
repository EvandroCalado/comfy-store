import { useLoaderData } from 'react-router-dom';
import { OrderList, PaginationContainer, SectionTitle } from '../../components';
import { TypeOrder } from '../../types/type-order';

export const Orders = () => {
  const { meta } = useLoaderData() as { meta: TypeOrder['meta'] };

  if (meta.pagination.total < 1) {
    return <SectionTitle>Please make an order</SectionTitle>;
  }

  return (
    <>
      <SectionTitle>You Orders</SectionTitle>
      <OrderList />
      <PaginationContainer />
    </>
  );
};
