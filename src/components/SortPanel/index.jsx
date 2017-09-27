import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import commonStyles from '../../assets/styles/common.less';
import styles from './style.less';

class SortPanel extends React.Component {
  constructor() {
    super();
    this.state = {
      activeSorting: 'rating',
    };
    this.sortingOtions = [
      {
        title: 'release date',
        value: 'release_date',
      }, {
        title: 'rating',
        value: 'rating',
      },
    ];
    this.setActive = this.setActive.bind(this);
  }

  setActive(sorting) {
    this.setState({ activeSorting: sorting });
  }

  render() {
    return (
      <div className={styles.sortPanel}>
        <Row between="xs">
          <Col xs={2}>
            <span>7 movies found</span>
          </Col>
          <Col xs={4}>
            <div className={commonStyles.textRight}>
              <span>Sort by</span>
              {this.sortingOtions.map((option) => {
                const isActive = option.value === this.state.activeSorting;
                const classStr = `${styles.sortingOption} ${isActive && styles.active}`;
                return (
                  <button
                    key={option.value}
                    className={classStr}
                    onClick={() => this.setActive(option.value)}
                    href="#"
                  >{option.title}</button>
                );
              })}
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default SortPanel;
