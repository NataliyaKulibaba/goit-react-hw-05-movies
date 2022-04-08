import { useFetchMoviesReview } from '../../hooks/useFetchMoviesReview';
import s from './Reviews.module.css'

export default function Reviews() {
  const review = useFetchMoviesReview();

  return (
    <div>
      {review && (
        <ul className={s.reviewList}>
          {review.map(({ content, author, id }) => (
            <li key={id} className={s.reviewItem}>
              <p>AUTHOR: {author}</p>
              <p>CONTENT: {content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
