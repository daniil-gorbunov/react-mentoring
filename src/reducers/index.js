import { combineReducers } from 'redux';
import { searchQuery, searchType, movies } from './search';
import sortType from './sort';

const appReducers = combineReducers({
  searchQuery,
  searchType,
  movies,
  sortType,
});

export default appReducers;
