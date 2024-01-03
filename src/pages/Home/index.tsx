import { Outlet } from 'react-router-dom';
import { Header } from '../../components';

export const Home = () => {
  return (
    <>
      <Header />

      <section className="align-element py-20">
        <Outlet />
      </section>
    </>
  );
};
