import { useFetchMoviesById } from '../../hooks/useFetchMoviesById';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import s from './MovieDetailsPage.module.css';

export default function MovieDetailsPage() {
  const movie = useFetchMoviesById();
  const navigate = useNavigate()

  function goBack(){
    navigate(-1)
  }

  return (
    <>
      
        <button type="button" onClick={goBack}>Go back</button>
      
      <div className={s.movie}>
        {movie ? (
          <div>
            <div className={s.movieInfo}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
                className={s.movieImg}
              ></img>
              <div className={s.movieDesc}>
                <h2 className={s.movieTitle}>{movie.title}</h2>
                <p className={s.movieItem}>VOTE: {movie.vote_average}</p>
                <p className={s.movieItem}>
                  GENRES: {movie.genres.map(genre => genre.name).join(', ')}
                </p>
                <p className={s.movieItem}>OVERVIEW: {movie.overview}</p>
              </div>
            </div>
            <hr />
            <p className={s.movieAditional}>Aditional information</p>

            <ul>
              <li>
                <NavLink
                  to={'cast'}
                  className={({ isActive }) =>
                    isActive ? s.activeLink : s.movieLink
                  }
                >
                  Cast
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={'reviews'}
                  className={({ isActive }) =>
                    isActive ? s.activeLink : s.movieLink
                  }
                >
                  Reviews
                </NavLink>
              </li>
            </ul>
          </div>
        ) : (
          <p className={s.movieInfo}>Movie not found</p>
        )}

        <Outlet />
      </div>
    </>
  );
}
