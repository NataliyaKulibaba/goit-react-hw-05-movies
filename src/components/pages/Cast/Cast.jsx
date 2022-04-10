import { useFetchMoviesCast } from '../../hooks/useFetchMoviesCast';
import s from './Cast.module.css';

export default function Cast() {
  const cast = useFetchMoviesCast();

  return (
    <div>
      {cast && (
        <ul className={s.cast}>
          {cast.map(({ profile_path, character, name, id }) => (
            <li key={id} className={s.castItem}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                    : 'https://st4.depositphotos.com/4967103/22006/v/1600/depositphotos_220068534-stock-illustration-404-error-found-tee-print.jpg'
                }
                alt={name}
                className={s.castImg}
              ></img>
              <ul className={s.castItemDesc}>
                <li className={s.castName}>Character: {character}</li>
                <li className={s.castName}>Name: {name}</li>
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
