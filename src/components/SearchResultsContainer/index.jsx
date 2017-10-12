import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Row, Col } from 'react-flexbox-grid';
import { DIRECTOR } from '../../constants/searchTypes';
import { openMovie, searchMovies } from '../../actions';
import MoviePreview from '../MoviePreview';
import styles from './style.less';
import movieType from '../../types/movieType';

const MovieList = ({ movies, onMovieClick }) => (
  <div className={styles.movieList}>
    <Row>
      {movies.length
        ? movies.map(movie => (
          <Col key={movie.show_id} xs={4}>
            <div className={styles.moviePreviewContainer}>
              <MoviePreview
                movie={movie}
                onMovieClick={onMovieClick}
              />
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

MovieList.propTypes = {
  movies: PropTypes.arrayOf(movieType).isRequired,
  onMovieClick: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  movies: state.movies,
});

const mapDispatchToProps = dispatch => ({
  onMovieClick: (movie) => {
    dispatch(openMovie(movie));
    searchMovies(dispatch, movie.director, DIRECTOR);
  },
});

const SearchResultsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MovieList);

export default SearchResultsContainer;
