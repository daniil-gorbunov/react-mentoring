import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import { setSortType, sortMovies } from '../../actions';
import commonStyles from '../../assets/styles/common.less';
import styles from './style.less';
import { DATE, RATING } from '../../constants/sortTypes';
import movieType from '../../types/movieType';

const sortOptionsList = [
  {
    title: 'release date',
    value: DATE,
  }, {
    title: 'rating',
    value: RATING,
  },
];

const SortOptions = ({ sortType, movies, onSortTypeClick }) => (
  <div className={styles.sortPanel}>
    <Row between="xs">
      <Col xs={2}>
        <span>{movies.length} movies found</span>
      </Col>
      <Col xs={4}>
        <div className={commonStyles.textRight}>
          <span>Sort by</span>
          {sortOptionsList.map((option) => {
            const isActive = option.value === sortType;
            const classStr = `${styles.sortingOption} ${isActive && styles.active}`;
            return (
              <button
                key={option.value}
                className={classStr}
                onClick={() => onSortTypeClick(movies, option.value)}
                href="#"
              >{option.title}</button>
            );
          })}
        </div>
      </Col>
    </Row>
  </div>
);

SortOptions.propTypes = {
  sortType: PropTypes.string,
  movies: PropTypes.arrayOf(movieType).isRequired,
  onSortTypeClick: PropTypes.func.isRequired,
};

SortOptions.defaultProps = {
  sortType: null,
};

const mapStateToProps = state => ({
  sortType: state.sortType,
  movies: state.movies,
});

const mapDispatchToProps = dispatch => ({
  onSortTypeClick: (movies, sortType) => {
    dispatch(setSortType(sortType));
    dispatch(sortMovies(movies, sortType));
  },
});

const SortPanel = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SortOptions);

export default SortPanel;
