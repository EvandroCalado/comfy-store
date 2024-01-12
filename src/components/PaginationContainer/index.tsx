import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import { TypeProducts } from '../../types/type-products';

export const PaginationContainer = () => {
  const { meta } = useLoaderData() as {
    meta: TypeProducts['meta'];
  };
  const { page, pageCount } = meta.pagination;
  const pages = Array.from({ length: pageCount }, (_, i) => i + 1);
  const { search, pathname } = useLocation();
  const navigate = useNavigate();

  const handlePageChange = (pageNumber: string) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set('page', pageNumber);

    navigate(`${pathname}?${searchParams.toString()}`);
  };

  if (pageCount < 2) return null;

  return (
    <div className="mt-16 flex justify-end">
      <div className="join">
        <button
          className="btn join-item btn-xs uppercase sm:btn-md"
          onClick={() => {
            let prevPage = page - 1;

            if (prevPage < 1) prevPage = pageCount;

            handlePageChange(prevPage.toString());
          }}
        >
          Prev
        </button>

        {pages.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber.toString())}
            className={`btn join-item btn-xs border-none sm:btn-md ${
              pageNumber === page ? 'border-base-300 bg-base-300' : ''
            }`}
          >
            {pageNumber}
          </button>
        ))}

        <button
          className="btn join-item btn-xs uppercase sm:btn-md"
          onClick={() => {
            let nextPage = page + 1;

            if (nextPage > pageCount) nextPage = 1;

            handlePageChange(nextPage.toString());
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};
