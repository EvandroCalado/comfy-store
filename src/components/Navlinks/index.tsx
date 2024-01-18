import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { RootState } from '../../store';

const links = [
  { id: 1, url: '/', text: 'home' },
  { id: 2, url: 'about', text: 'about' },
  { id: 3, url: 'products', text: 'products' },
  { id: 4, url: 'checkout', text: 'checkout' },
  { id: 5, url: 'orders', text: 'orders' },
  { id: 6, url: 'wishlist', text: 'wishlist' },
];

export const Navlinks = () => {
  const user = useSelector((state: RootState) => state.userState.user);

  return (
    <>
      {links.map((link) => {
        const { id, url, text } = link;

        if (
          (url === 'checkout' || url === 'orders' || url === 'wishlist') &&
          !user
        ) {
          return null;
        }

        return (
          <li key={id}>
            <NavLink to={url} className="capitalize">
              {text}
            </NavLink>
          </li>
        );
      })}
    </>
  );
};
