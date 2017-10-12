import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-flexbox-grid';
import { setSearchQuery, setSearchType, searchMovies } from '../../actions';
import styles from './style.less';
import commonStyles from '../../assets/styles/common.less';
import { TITLE, DIRECTOR } from '../../constants/searchTypes';

const searchTypesList = [
  {
    title: 'title',
    value: TITLE,
  }, {
    title: 'director',
    value: DIRECTOR,
  },
];

const Search = ({ searchType, searchQuery, onQueryChange, onSearchTypeClick, onSearchClick }) => (
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
            value={searchQuery}
            onInput={e => onQueryChange(e.target.value)}
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
          {searchTypesList.map((type) => {
            const isActive = type.value === searchType;
            return (
              <button
                key={type.value}
                className={`${isActive && styles.active}`}
                onClick={() => onSearchTypeClick(type.value)}
              >{type.title}</button>
            );
          })}
        </Col>
        <Col xs={6}>
          <div className={commonStyles.textRight}>
            <Link to={`/search/${encodeURIComponent(searchQuery)}`}>
              <button
                className={styles.active}
                onClick={() => { onSearchClick(searchQuery, searchType); }}
              >Search</button>
            </Link>
          </div>
        </Col>
      </Row>
    </div>
  </div>
);

Search.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  searchType: PropTypes.string.isRequired,
  onQueryChange: PropTypes.func.isRequired,
  onSearchTypeClick: PropTypes.func.isRequired,
  onSearchClick: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  searchQuery: state.searchQuery,
  searchType: state.searchType,
});

const mapDispatchToProps = dispatch => ({
  onQueryChange: query => dispatch(setSearchQuery(query)),
  onSearchTypeClick: searchType => dispatch(setSearchType(searchType)),
  onSearchClick: (searchQuery, searchType) => searchMovies(dispatch, searchQuery, searchType),
});

const SearchPanel = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);

export default SearchPanel;
