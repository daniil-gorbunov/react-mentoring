import { combineReducers } from 'redux';
import { searchQuery, searchType, movies, movie, sortType } from './common';

export default combineReducers({
  searchQuery,
  searchType,
  movies,
  movie,
  sortType,
});
