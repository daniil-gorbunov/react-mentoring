import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-flexbox-grid';
import { clearSearch } from '../../actions';
import styles from './style.less';
import commonStyles from '../../assets/styles/common.less';
import movieType from '../../types/movieType';

const Movie = ({ movie, onSearchClick }) => (

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
            >Search</button>
          </Link>
        </div>
      </Col>
    </Row>
    <Row className={commonStyles.row}>
      <Col xs={4}>
        <img src={movie.poster} alt={movie.show_title} />
      </Col>
      <Col xs={8}>
        <div>
          <span className={styles.movieTtitle}>{movie.show_title}</span>
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
      </Col>
    </Row>
  </div>
);

Movie.propTypes = {
  movie: movieType.isRequired,
  onSearchClick: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  movie: state.movie,
});

const mapDispatchToProps = dispatch => ({
  onSearchClick: () => dispatch(clearSearch()),
});

const MovieInfo = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Movie);

export default MovieInfo;
