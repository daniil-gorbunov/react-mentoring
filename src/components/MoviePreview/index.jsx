import React from 'react';
import styles from './style.less';

const MoviePreview = ({ movie }) => (
  <div className={styles.moviePreview}>
    <div>
      <img className={styles.poster} src={movie.poster} alt={movie.show_title} />
    </div>
    <div>
      <div className={styles.mainInfo}>
        <div className={styles.title}>{movie.show_title}</div>
        <div className={styles.year}>{movie.release_year}</div>
      </div>
      <div>
        <div className={styles.genre}>{movie.category}</div>
      </div>
    </div>
  </div>
);

export default MoviePreview;
