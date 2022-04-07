import { useFetchMoviesById } from '../hooks/useFetchMoviesById';
import { NavLink,Outlet } from 'react-router-dom';
import { useParams } from 'react-router-dom';


export default function MovieDetailsPage() {
  const movie = useFetchMoviesById();
  const { movieId } = useParams();

  return (
    <>
      {movie && (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
          ></img>

          <p>{movie.title}</p>
          <p>{movie.overview}</p>
          <p>vote_average:{movie.vote_average}</p>
          {/* <p>genres:{...movie.genres}</p> */}

          <hr />
          <p>Aditional information</p>

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
      {/* <Outlet/> */}
    </>
  );
}
