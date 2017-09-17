import React from 'react';
import styles from './style.less';
import appStyles from '../App/style.less';

const SearchPanel = () => (
  <div>
    <div className={appStyles.row}>
      <span className={appStyles.uppercase}>Find your movie</span>
    </div>
    <div className={appStyles.row}>
      <input className={styles.searchInput} type="text" placeholder="Search" />
    </div>
    <div className={`${appStyles.row} ${styles.searchControls}`}>
      <div className={styles.filter}>
        <span className={appStyles.uppercase}>Search by</span>
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
