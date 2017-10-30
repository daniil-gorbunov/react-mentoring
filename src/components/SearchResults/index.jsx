import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Row, Col } from 'react-flexbox-grid';
import { openMovie } from '../../actions';
import MoviePreview from '../MoviePreview';
import styles from './style.less';
import movieType from '../../types/movieType';

export const SearchResultsView = ({ movies, onMovieClick }) => (
  <div className={styles.movieList}>
    <Row>
      {movies.length
        ? movies.map(movie => (
          <Col key={movie.id} xs={4}>
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

SearchResultsView.propTypes = {
  movies: PropTypes.arrayOf(movieType).isRequired,
  onMovieClick: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  movies: state.movies,
});

const mapDispatchToProps = dispatch => ({
  onMovieClick: movie => dispatch(openMovie(movie)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchResultsView);

