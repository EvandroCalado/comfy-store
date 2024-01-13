import dayjs from 'dayjs';
import { useLoaderData } from 'react-router-dom';
import { TypeOrder } from '../../types/type-order';

export const OrderList = () => {
  const { orders, meta } = useLoaderData() as {
    orders: TypeOrder;
    meta: TypeOrder['meta'];
  };

  return (
    <div className="mt-8 min-h-[36.5vh]">
      <h4 className="mb-4 capitalize">total orders: {meta.pagination.total}</h4>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Products</th>
              <th>Cost</th>
              <th className="hidden sm:block">Date</th>
            </tr>
          </thead>
          {/* body */}
          <tbody>
            {orders.data.map((order) => {
              const { id } = order;
              const { name, address, numItemsInCart, orderTotal, createdAt } =
                order.attributes;

              const date = dayjs(createdAt).format('hh:mm a - MMMM DD, YYYY');

              return (
                <tr key={id}>
                  <td>{name}</td>
                  <td>{address}</td>
                  <td>{numItemsInCart}</td>
                  <td>R$ {orderTotal.toFixed(2)}</td>
                  <td className="hidden sm:block">{date}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
