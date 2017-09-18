import React from 'react';
import styles from './style.less';
import commonStyles from '../../assets/styles/common.less';

const SearchPanel = () => (
  <div>
    <div className={commonStyles.row}>
      <span className={commonStyles.uppercase}>Find your movie</span>
    </div>
    <div className={`${commonStyles.row} ${styles.inputContainer}`}>
      <input className={styles.searchInput} type="text" placeholder="Search" />
    </div>
    <div className={`${commonStyles.row} ${styles.searchControls}`}>
      <div className={styles.filter}>
        <span className={commonStyles.uppercase}>Search by</span>
        <button className={styles.active}>Title</button>
        <button>Director</button>
      </div>
      <div className={styles.searchBtn}>
        <button className={styles.active}>Search</button>
      </div>
    </div>
  </div>
);

export default SearchPanel;
