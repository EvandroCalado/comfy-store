import { Menu, Moon, ShoppingCart, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Navlinks } from '../Navlinks';

const locaTheme = localStorage.getItem('theme') ?? 'light';

export const Navbar = () => {
  const [theme, setTheme] = useState(locaTheme);

  const handleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <nav className="bg-base-200">
      <div className="align-element navbar">
        <div className="navbar-start">
          {/* TITLE */}
          <NavLink
            to="/"
            className="btn btn-primary hidden items-center text-3xl lg:flex"
          >
            C
          </NavLink>
          {/* DROPDOWN */}
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
          {/* THEME SETUP */}
          <label className="swap swap-rotate">
            <input type="checkbox" onChange={handleTheme} />
            {/* SUN ICON */}
            <Sun className="swap-on" />
            {/* MOON ICON */}
            <Moon className="swap-off" />
          </label>
          {/* CART ICON */}
          <NavLink to="/cart" className="btn btn-circle btn-ghost btn-md ml-4">
            <div className="indicator">
              <ShoppingCart />
              <span className="badge indicator-item badge-primary badge-sm">
                0
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
