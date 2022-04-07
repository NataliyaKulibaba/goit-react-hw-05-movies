import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { useFetchMovies } from '../hooks/useFetchMovies';

export default function HomePage() {
  const movies = useFetchMovies();
  

  return (<>
  {/* <Outlet/> */}
  
    <ul>
      {movies &&
        movies.map(({ title, id, name }) => (
          <li key={id}>
            <Link to={`/movies/${id}`}>{title ? title : name}</Link>
          </li>
        ))}
    </ul>
    </>
  );
  
}
