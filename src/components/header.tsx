import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { nanoid } from 'nanoid';

const navArray: { name: string; navTo: string }[] = [
  {
    name: 'Home',
    navTo: '/',
  },
  {
    name: 'Portfolio',
    navTo: '/portfolio',
  },
];

export const Header: React.FC = () => {
  return (
    <>
      <header className="header">
        <nav>
          <ul className="nav-list">
            {navArray.map(({ name, navTo }) => {
              return (
                <li key={nanoid()}>
                  <NavLink
                    to={navTo}
                    className={({ isActive, isPending }) =>
                      isPending ? 'pending' : isActive ? 'active' : 'nav-link'
                    }
                  >
                    {name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
};
