import { LayoutGrid, StretchHorizontal } from 'lucide-react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { ProductsGrid, ProductsList } from '..';
import { TypeProducts } from '../../types/type-products';

export const ProductsContainer = () => {
  const products = useLoaderData() as TypeProducts;
  const { total } = products.meta.pagination;

  const [layout, setLayout] = useState('grid');

  const setActiveStyles = (pattern: string) => {
    return `btn btn-circle btn-sm text-xl ${
      pattern === layout ? 'btn-primary text-primary-content' : ''
    }`;
  };

  return (
    <>
      {/* header */}
      <div className="mt-8 flex items-center justify-between border-b border-base-300 pb-5">
        <h4 className="font-medium">
          {total} product{total > 1 && 's'}
        </h4>
        <div className="flex gap-x-2">
          <button
            type="button"
            onClick={() => setLayout('grid')}
            className={setActiveStyles('grid')}
          >
            <LayoutGrid size={18} />
          </button>

          <button
            type="button"
            onClick={() => setLayout('list')}
            className={setActiveStyles('list')}
          >
            <StretchHorizontal size={18} />
          </button>
        </div>
      </div>

      {/* products */}
      <div>
        {total === 0 ? (
          <h5 className="mt-16 text-2xl">
            Sorry, no products matched your search...
          </h5>
        ) : layout === 'grid' ? (
          <ProductsGrid />
        ) : (
          <ProductsList />
        )}
      </div>
    </>
  );
};
