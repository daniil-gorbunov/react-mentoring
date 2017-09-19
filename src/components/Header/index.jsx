import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import SearchPanel from '../SearchPanel';
import MovieInfo from '../MovieInfo';
import SubHeader from '../SubHeader';
import styles from './style.less';
import commonStyles from '../../assets/styles/common.less';
import moviesService from '../../services/moviesService';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      movie: null,
      isSearch: false,
    };
    this.goSearch = this.goSearch.bind(this);
  }

  componentDidMount() {
    moviesService.getMovie()
      .then((movie) => { this.setState({ movie }); });
  }

  goSearch() {
    this.setState({ isSearch: !this.state.isSearch });
  }

  render() {
    const searchButton = this.state.isSearch
      ? null
      : <button className={styles.searchBtn} onClick={this.goSearch}>Search</button>;

    const content = this.state.isSearch
      ? <SearchPanel />
      : <MovieInfo movie={this.state.movie} />;

    return (
      <div>
        <div className={styles.header}>
          <Row between="xs">
            <Col xs={2}>
              <span className={styles.title}>netflixroulette</span>
            </Col>
            <Col xs={2}>
              <div className={commonStyles.textRight}>
                {searchButton}
              </div>
            </Col>
          </Row>
          {content}
        </div>
        <div className={styles.subHeaderContainer}>
          <SubHeader />
        </div>
      </div>
    );
  }
}

export default Header;
