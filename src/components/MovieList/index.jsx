import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import MoviePreview from '../MoviePreview';
import styles from './style.less';

const MovieList = ({ movieList }) => (
  <div className={styles.movieList}>
    <Row>
      {movieList.map(movie => (
        <Col key={movie.show_id} xs={4}>
          <div className={styles.moviePreviewContainer}>
            <MoviePreview movie={movie} />
          </div>
        </Col>
      ))}
    </Row>
  </div>
);

export default MovieList;
