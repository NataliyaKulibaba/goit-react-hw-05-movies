import { NavLink, Outlet } from 'react-router-dom';

import s from './Layout.module.css';

export default function Layout() {
  return (
    <div className={s.layout}>
      <nav className={s.navigation}>
        <NavLink  to="home" className={s.link}>
          Home
        </NavLink>

        <NavLink to="movies" className={s.link}>
          Movies
        </NavLink>
      </nav>

      <Outlet />
    </div>
  );
}
