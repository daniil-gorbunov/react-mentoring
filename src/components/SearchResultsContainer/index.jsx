import React from 'react';
import { Route, Switch } from 'react-router-dom';
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
        <Switch>
          <Route exact path="/search/:searchQuery">
            <MovieList movieList={this.state.movieList} />
          </Route>
          <Route exact path="/film/:filmName">
            <MovieList movieList={this.state.movieList} />
          </Route>
          <Route path="/">
            <MovieList movieList={[]} />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default SearchResultsContainer;
