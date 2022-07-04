import propTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";


function Movie({ id, coverImg, title, summary, genres }) {
  return (
    <div>
        <div className={styles.movieList}>
          <img className={styles.movieImg} src={coverImg} alt={title} />
          <div className={styles.movieInfo}>
            {title.length > 40 ? (
              <h3>
                <Link to={`/movie/${id}`}>{`${title.slice(0, 40)}...`}</Link>
              </h3>
            ) : (
              <h3><Link to={`/movie/${id}`}>{title}</Link></h3>
            )}
            <p>
              {summary.length > 140 ? `${summary.slice(0, 150)}...` : summary}
            </p>
            <div className={styles.genresBox}>
              {genres.map((g) => (
                <div>{g}</div>
              ))}
            </div>
          </div>
        </div>
    </div>
  );
   }

Movie.propTypes = {
  id: propTypes.number.isRequired,
  coverImg: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  summary: propTypes.string.isRequired,
  genres: propTypes.arrayOf(propTypes.string).isRequired,
};
export default Movie;
