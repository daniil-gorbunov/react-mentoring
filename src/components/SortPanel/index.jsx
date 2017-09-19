import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import commonStyles from '../../assets/styles/common.less';
import styles from './style.less';

const SortPanel = () => (
  <div className={styles.sortPanel}>
    <Row between="xs">
      <Col xs={2}>
        <span>7 movies found</span>
      </Col>
      <Col xs={4}>
        <div className={commonStyles.textRight}>
          <span>Sort by</span>
          <a href="#">release date</a>
          <a className={styles.active} href="#">rating</a>
        </div>
      </Col>
    </Row>
  </div>
);

export default SortPanel;
