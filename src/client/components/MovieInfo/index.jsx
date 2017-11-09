import moment from 'moment';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-flexbox-grid';
import { clearSearch } from '../../actions';
import styles from './style.less';
import commonStyles from '../../assets/styles/common.less';
import { movieShape } from '../../types/movieType';
import { IMG_URL, NO_IMAGE_PATH, POSTER_SIZE } from '../../constants/config';

export const MovieInfoView = ({ movie, onSearchClick }) => (

  <div className={styles.movieInfo}>
    <Row className={commonStyles.row} between="xs">
      <Col xs={2}>
        <span className={styles.title}>netflixroulette</span>
      </Col>
      <Col xs={2}>
        <div className={commonStyles.textRight}>
          <Link to="/">
            <button
              className={styles.searchBtn}
              onClick={onSearchClick}
            >
              Search
            </button>
          </Link>
        </div>
      </Col>
    </Row>
    <Row className={commonStyles.row}>
      <Col xs={4}>
        <img
          className={styles.poster}
          src={movie.poster_path ? `${IMG_URL}${POSTER_SIZE}${movie.poster_path}` : NO_IMAGE_PATH}
          alt={movie.original_title}
        />
      </Col>
      <Col xs={8}>
        <div>
          <span className={styles.movieTitle}>{movie.original_title}</span>
          <div className={styles.rating}>{movie.vote_average.toFixed(1)}</div>
        </div>
        <div>
          <span className={styles.category}>{movie.vote_count} votes</span>
        </div>
        <div className={styles.subHeader}>
          <span className={styles.year}>{moment(movie.release_date).format('YYYY')}</span>
        </div>
        <div>
          <p>{movie.overview}</p>
        </div>
        <div className={styles.cast}>
          <p>Popularity: {movie.popularity}</p>
          <p>Language: {movie.original_language}</p>
        </div>
      </Col>
    </Row>
  </div>
);

MovieInfoView.propTypes = {
  movie: PropTypes.shape(movieShape).isRequired,
  onSearchClick: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  movie: state.movie,
});

const mapDispatchToProps = dispatch => ({
  onSearchClick: () => dispatch(clearSearch()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MovieInfoView);
