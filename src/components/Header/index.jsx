import React from 'react';
import SearchPanel from '../SearchPanel';
import SubHeader from '../SubHeader';
import styles from './style.less';

const Header = () => (
  <div>
    <div className={styles.header}>
      <div className={styles.titleContainer}>
        <div className={styles.title}>
          <span>netflixroulette</span>
        </div>
        <div className={styles.search}>
          <button>Search</button>
        </div>
      </div>
      <div className={styles.searchPanelContainer}>
        <SearchPanel />
      </div>
    </div>
    <div className={styles.subHeaderContainer}>
      <SubHeader />
    </div>
  </div>
);

export default Header;
