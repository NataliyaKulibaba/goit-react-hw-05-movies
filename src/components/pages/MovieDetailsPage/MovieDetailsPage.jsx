import { useFetchMoviesById } from '../../hooks/useFetchMoviesById';
import { Link,NavLink, Outlet} from 'react-router-dom';
import s from './MovieDetailsPage.module.css'



export default function MovieDetailsPage() {
  const movie = useFetchMoviesById();


  return (<>
  <Link to='/movies'>Return to search</Link>
    <div className={s.movie}>
      {movie && (
        <div>
          <div className={s.movieInfo}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
            className={s.movieImg}
          ></img>
<ul>
          <li><h2>{movie.title}</h2></li>
          <li className={s.movieList}>VOTE: {movie.vote_average}</li>
          <li className={s.movieList}>GENRES: {movie.genres.map(genre=>genre.name).join(', ')}</li>
          <li className={s.movieList}>OVERVIEW: {movie.overview}</li>
          </ul>
          </div>
          <hr />
          <p className={s.movieAditional}>Aditional information</p>

          <ul>
            <li>
              <NavLink to={"cast"}>Cast</NavLink>
            </li>
            <li>
              <NavLink to={"reviews"}>Reviews</NavLink>
            </li>
          </ul>


        </div>
      )}
      <hr/>
      <Outlet/>
    </div>
    </>
  );
}
