import { Link, useLoaderData } from 'react-router-dom';
import { TypeProducts } from '../../types/type-products';

export const ProductsGrid = () => {
  const { products } = useLoaderData() as {
    products: TypeProducts;
  };

  return (
    <div className="grid gap-4 pt-12 md:grid-cols-2 lg:grid-cols-3">
      {products.data.map((product) => {
        const { image, title, price, category, featured } = product.attributes;

        return (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className="group card w-full shadow-lg transition duration-300 hover:shadow-xl"
          >
            <figure>
              <img
                src={image.data.attributes.formats.small.url}
                alt={title}
                className="h-64 w-full object-cover transition duration-300 group-hover:scale-105 md:h-48"
              />
            </figure>

            <div className="card-body">
              <div className="flex items-center gap-2">
                <h2 className="card-title capitalize tracking-wider">
                  {title}
                </h2>
                {featured && (
                  <span className="badge badge-primary uppercase">new</span>
                )}
              </div>

              <div className="card-actions mt-4 items-center justify-between">
                <span className="text-secondary">R${price}</span>
                <div className="badge badge-outline">{category}</div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
