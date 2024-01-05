import { Link, useLoaderData } from 'react-router-dom';
import { TypeFeatured } from '../../types/type-featured';

export const ProductsGrid = () => {
  const products = useLoaderData() as TypeFeatured;

  return (
    <div className="grid gap-4 pt-12 md:grid-cols-2 lg:grid-cols-3">
      {products.data.map((product) => (
        <Link
          key={product.id}
          to={`/products/${product.id}`}
          className="card w-full shadow-lg transition duration-300 hover:shadow-xl"
        >
          <figure>
            <img
              src={product.attributes.image.data.attributes.url}
              alt={product.attributes.title}
              className="h-64 w-full object-cover md:h-48"
            />
          </figure>

          <div className="card-body">
            <h2 className="card-title capitalize tracking-wider">
              {product.attributes.title}
            </h2>

            <div className="card-actions items-center justify-between">
              <span className="text-secondary">
                R${product.attributes.price}
              </span>
              <div className="badge badge-outline">
                {product.attributes.category}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
