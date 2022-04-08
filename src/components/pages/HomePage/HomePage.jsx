import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useFetchMovies } from '../../hooks/useFetchMovies';
import s from './HomePage.module.css'

export default function HomePage() {
  const movies = useFetchMovies();
  const location = useLocation();

  return (
    <>
      <ul className={s.moviesList}>
        {movies &&
          movies.map(({ title, id, name }) => (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {title ? title : name}
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
}
