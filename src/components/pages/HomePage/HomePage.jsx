import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useFetchMovies } from '../../hooks/useFetchMovies';
import s from './HomePage.module.css';

export default function HomePage() {
  const movies = useFetchMovies();
  const location = useLocation();

  return (
    <>
      <ul className={s.moviesList}>
        {movies &&
          movies.map(({ title, id, name, poster_path }) => (
            <li key={id} className={s.movieItem}>
              <Link
                to={`/movies/${id}`}
                state={{ from: location }}
                className={s.movieLink}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                  alt={title ? title : name}
                  className={s.movie}
                ></img>
                <p className={s.movieTitle}>{title ? title : name}</p>
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
}
