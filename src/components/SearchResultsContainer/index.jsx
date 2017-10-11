import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Row, Col } from 'react-flexbox-grid';
import MoviePreview from '../MoviePreview';
import styles from './style.less';
import movieType from '../../types/movieType';

const MovieList = ({ movies }) => (
  <div className={styles.movieList}>
    <Row>
      {movies.length
        ? movies.map(movie => (
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

MovieList.propTypes = {
  movies: PropTypes.arrayOf(movieType).isRequired,
};

const mapStateToProps = state => ({
  movies: state.movies,
});

const SearchResultsContainer = connect(
  mapStateToProps,
)(MovieList);

export default SearchResultsContainer;
