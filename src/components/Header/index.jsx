import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MovieInfo from '../MovieInfo';
import SearchPanel from '../SearchPanel';
import SortPanel from '../SortPanel';
import styles from './style.less';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      movie: null,
    };
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
            <Route path="/film/:filmName" component={SortPanel} />
            <Route path="/search/:searchQuery" component={SortPanel} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Header;
