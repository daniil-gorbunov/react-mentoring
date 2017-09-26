import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import MoviePreview from '../MoviePreview';
import styles from './style.less';

const MovieList = ({ movieList }) => (
  <div className={styles.movieList}>
    <Row>
      {movieList.length
        ? movieList.map(movie => (
          <Col key={movie.show_id} xs={4}>
            <div className={styles.moviePreviewContainer}>
              <MoviePreview movie={movie} />
            </div>
          </Col>
        ))
        : <Col xs={12}>
          <Row center="xs">
            <Col>
              <div className={styles.notFound}>No films found</div>
            </Col>
          </Row>
        </Col>
      }
    </Row>
  </div>
);

export default MovieList;
