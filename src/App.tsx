import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ErrorElement } from './components';
import {
  About,
  Cart,
  Checkout,
  Error,
  Home,
  Landing,
  Login,
  Orders,
  Product,
  Products,
  Register,
} from './pages';

// loaders
import { featuredLoader, landingLoader, productsLoader } from './api';

// actions

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
        loader: landingLoader,
      },
      {
        path: 'products',
        element: <Products />,
        errorElement: <ErrorElement />,
        loader: productsLoader,
      },
      {
        path: 'products/:id',
        element: <Product />,
        errorElement: <ErrorElement />,
        loader: featuredLoader,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'checkout',
        element: <Checkout />,
      },
      {
        path: 'orders',
        element: <Orders />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: '/register',
    element: <Register />,
    errorElement: <Error />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
