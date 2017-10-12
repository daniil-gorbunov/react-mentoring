import { combineReducers } from 'redux';
import { searchQuery, searchType, movies, movie, sortType } from './common';

const appReducers = combineReducers({
  searchQuery,
  searchType,
  movies,
  movie,
  sortType,
});

export default appReducers;
