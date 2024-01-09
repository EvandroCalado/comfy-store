import { Menu, Moon, ShoppingCart, Sun } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { toggleTheme } from '../../features/user/userSlice';
import { RootState } from '../../store';
import { Navlinks } from '../Navlinks';

export const Navbar = () => {
  const dispatch = useDispatch();

  const handleTheme = () => {
    dispatch(toggleTheme());
  };

  const numItemsInCart = useSelector(
    (state: RootState) => state.cartState.numItemsInCart,
  );

  return (
    <nav className="bg-base-200">
      <div className="align-element navbar">
        <div className="navbar-start">
          {/* title */}
          <NavLink
            to="/"
            className="btn btn-primary hidden items-center text-3xl lg:flex"
          >
            C
          </NavLink>
          {/* dropdwn */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <Menu />
            </label>
            <ul
              tabIndex={0}
              className="menu dropdown-content menu-sm z-[1] mt-3 w-56 space-y-2 rounded-box bg-base-200 p-2 shadow"
            >
              <Navlinks />
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal space-x-2">
            <Navlinks />
          </ul>
        </div>
        <div className="navbar-end">
          {/* theme setup */}
          <label className="swap swap-rotate">
            <input type="checkbox" onChange={handleTheme} />
            {/* sun icon */}
            <Sun className="swap-on" />
            {/* moon icon */}
            <Moon className="swap-off" />
          </label>
          {/* cart icon */}
          <NavLink to="/cart" className="btn btn-circle btn-ghost btn-md ml-4">
            <div className="indicator">
              <ShoppingCart />
              <span className="badge indicator-item badge-primary badge-sm">
                {numItemsInCart}
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
