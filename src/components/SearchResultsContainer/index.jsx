import React from 'react';
import MovieList from '../MovieList';
import moviesService from '../../services/moviesService';

class SearchResultsContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      movieList: [],
    };
  }

  componentDidMount() {
    moviesService.getMovies()
      .then((movieList) => { this.setState({ movieList }); });
  }

  render() {
    return (
      <div>
        <MovieList movieList={this.state.movieList} />
      </div>
    );
  }
}

export default SearchResultsContainer;
