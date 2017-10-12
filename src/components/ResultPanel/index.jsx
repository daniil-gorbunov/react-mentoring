import React from 'react';
import { connect } from 'react-redux';
import movieType from '../../types/movieType';

const Panel = ({ movie }) => (
  <div>
    Movies by {movie.director}
  </div>
);

Panel.propTypes = {
  movie: movieType.isRequired,
};

const mapStateToProps = state => ({
  movie: state.movie,
});

const ResultPanel = connect(
  mapStateToProps,
)(Panel);

export default ResultPanel;
