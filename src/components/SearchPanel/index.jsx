import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-flexbox-grid';
import styles from './style.less';
import commonStyles from '../../assets/styles/common.less';

class SearchPanel extends React.Component {
  constructor() {
    super();
    this.state = {
      searchQuery: '',
    };
  }

  handleChange(event) {
    this.setState({
      searchQuery: event.target.value,
    });
  }

  render() {
    return (
      <div className={styles.searchPanel}>
        <Row className={commonStyles.row}>
          <Col xs={2}>
            <span className={styles.title}>netflixroulette</span>
          </Col>
        </Row>
        <Row className={commonStyles.row}>
          <Col xs={12}>
            <span className={`${commonStyles.uppercase} ${styles.searchTitle}`}>Find your movie</span>
          </Col>
        </Row>
        <Row className={commonStyles.row}>
          <Col xs={12}>
            <div className={styles.inputContainer}>
              <input
                className={styles.searchInput}
                value={this.state.searchQuery}
                onChange={this.handleChange}
                type="text"
                placeholder="Search"
              />
            </div>
          </Col>
        </Row>
        <div className={styles.searchControls}>
          <Row className={commonStyles.row}>
            <Col xs={6}>
              <span className={commonStyles.uppercase}>Search by</span>
              <button className={styles.active}>Title</button>
              <button>Director</button>
            </Col>
            <Col xs={6}>
              <div className={commonStyles.textRight}>
                <Link to={`/search/${this.state.searchQuery}`}>
                  <button className={styles.active}>Search</button>
                </Link>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default SearchPanel;
