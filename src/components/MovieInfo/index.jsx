import React from 'react';
import styles from './style.less';

const MovieInfo = ({ movie }) => movie && (

  <div className={styles.movieInfo}>
    <div>
      <img src={movie.poster} alt={movie.show_title} />
    </div>
    <div className={styles.description}>
      <div>
        <span className={styles.title}>{movie.show_title}</span>
        <span className={styles.rating}>{movie.rating}</span>
      </div>
      <div>
        <span className={styles.category}>{movie.category}</span>
      </div>
      <div className={styles.subHeader}>
        <span className={styles.year}>{movie.release_year}</span>
        <span className={styles.runtime}>{movie.runtime}</span>
      </div>
      <div>
        <p>{movie.summary}</p>
      </div>
      <div className={styles.cast}>
        <p>{movie.director}</p>
        <p>{movie.show_cast}</p>
      </div>
    </div>
  </div>
);

export default MovieInfo;
