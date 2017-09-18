import React from 'react';
import styles from './style.less';

const SortPanel = () => (
  <div className={styles.sortPanel}>
    <div>
      <span>7 movies found</span>
    </div>
    <div>
      <span>Sort by</span>
      <a href="#">release date</a>
      <a className={styles.active} href="#">rating</a>
    </div>
  </div>
);

export default SortPanel;
