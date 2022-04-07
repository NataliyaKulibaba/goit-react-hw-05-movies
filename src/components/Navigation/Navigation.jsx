import { NavLink, Outlet} from 'react-router-dom';

import { useLocation, useNavigate } from 'react-router-dom';
import s from './Navigation.module.css';

export default function Navigation() {
  const location = useLocation()
  const navigate = useNavigate()
 

  console.log(location)
  console.log(navigate )
  
  return (<>
    <nav className="s.Navigation">
      <NavLink to="home" className={s.link}>
      Home
      </NavLink>

      <NavLink to="movies" className={s.link} >
      Movies
      </NavLink>

    </nav>

<hr/>
{/* <Outlet/> */}
    </>
  );
}
