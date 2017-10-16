import moment from 'moment';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-flexbox-grid';
import commonStyles from '../../assets/styles/common.less';
import styles from './style.less';
import movieType from '../../types/movieType';
import { IMG_URL, POSTER_SIZE, NO_IMAGE_PATH } from '../../constants/config';

const MoviePreview = ({ movie, onMovieClick }) => (
  <div className={styles.moviePreview}>
    <Link
      to={`/film/${encodeURIComponent(movie.title)}`}
      onClick={() => onMovieClick(movie)}
    >
      <div>
        <Row>
          <Col xs={12}>
            <Row center="xs">
              <Col xs={12}>
                <img
                  className={styles.poster}
                  src={movie.poster_path ? `${IMG_URL}${POSTER_SIZE}${movie.poster_path}` : NO_IMAGE_PATH}
                  alt={movie.original_title}
                />
              </Col>
            </Row>
          </Col>
        </Row>
        <div className={styles.textInfo}>
          <Row>
            <Col xs={12}>
              <div className={styles.mainInfo}>
                <Row between="xs">
                  <Col xs={10}>
                    <span className={styles.title}>{movie.original_title}</span>
                  </Col>
                  <Col xs={2}>
                    <div className={commonStyles.textRight}>
                      <span className={styles.year}>{moment(movie.release_date).format('YYYY')}</span>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </Link>
  </div>
);

MoviePreview.propTypes = {
  movie: movieType,
  onMovieClick: PropTypes.func.isRequired,
};

MoviePreview.defaultProps = {
  movie: null,
};

export default MoviePreview;
