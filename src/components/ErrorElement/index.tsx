import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

export const ErrorElement = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <main className="grid min-h-screen place-items-center px-8">
        <div className="text-center">
          <p className="text-9xl font-semibold text-primary">{error.status}</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            {error.statusText}
          </h2>
          <p className="mt-6 text-lg leading-7">{error.data}</p>
        </div>
      </main>
    );
  }
};
