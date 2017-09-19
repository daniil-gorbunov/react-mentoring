import React from 'react';
import SearchPanel from '../SearchPanel';
import MovieInfo from '../MovieInfo';
import SubHeader from '../SubHeader';
import styles from './style.less';
import moviesService from '../../services/moviesService';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      movie: null,
      isSearch: false,
    };
    this.switchState = this.switchState.bind(this);
  }

  componentDidMount() {
    moviesService.getMovie()
      .then((movie) => { this.setState({ movie }); });
  }

  switchState() {
    this.setState({isSearch: !this.state.isSearch});
  }

  render() {
    let searchButton = this.state.isSearch ? null : (<button onClick={this.switchState}>Search</button>);
    let content = this.state.isSearch ? (<SearchPanel />) : (<MovieInfo movie={this.state.movie}/>);
    return (
      <div>
        <div className={styles.header}>
          <div className={styles.titleContainer}>
            <div className={styles.title}>
              <span>netflixroulette</span>
            </div>
            <div className={styles.search}>
              {searchButton}
            </div>
          </div>
          {content}
        </div>
        <div className={styles.subHeaderContainer}>
          <SubHeader/>
        </div>
      </div>
    )
  }
}

export default Header;
