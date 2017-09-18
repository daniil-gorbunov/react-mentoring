import React from 'react';
import MoviePreview from '../MoviePreview';
import styles from './style.less';

const MovieList = ({ movieList }) => (
  <div className={styles.movieList}>
    {movieList.map(movie => (
      <div className={styles.moviePreviewContainer}>
        <MoviePreview movie={movie} />
      </div>
    ))}
  </div>
);

export default MovieList;
