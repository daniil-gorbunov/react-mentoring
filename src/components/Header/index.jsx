import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MovieInfo from '../MovieInfo';
import ResultPanel from '../ResultPanel';
import SearchPanel from '../SearchPanel';
import SortPanel from '../SortPanel';
import styles from './style.less';
import moviesService from '../../services/moviesService';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      movie: null,
    };
  }

  componentDidMount() {
    moviesService.getMovie()
      .then((movie) => { this.setState({ movie }); });
  }

  render() {
    return (
      <div>
        <div className={styles.header}>
          <Switch>
            <Route path="/film/:filmName">
              <MovieInfo movie={this.state.movie} />
            </Route>
            <Route path="/search/:searchQuery" component={SearchPanel} />
            <Route path="/" component={SearchPanel} />
          </Switch>
        </div>
        <div className={styles.subHeaderContainer}>
          <Switch>
            <Route path="/film/:filmName" component={ResultPanel} />
            <Route path="/search/:searchQuery" component={SortPanel} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Header;
