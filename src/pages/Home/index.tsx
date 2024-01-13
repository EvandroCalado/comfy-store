import { Outlet, useNavigation } from 'react-router-dom';
import { Footer, Header, Loading, Navbar } from '../../components';

export const Home = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';

  return (
    <>
      <Header />
      <Navbar />

      {isPageLoading ? (
        <Loading />
      ) : (
        <section className="align-element py-20">
          <Outlet />
        </section>
      )}

      <Footer />
    </>
  );
};
