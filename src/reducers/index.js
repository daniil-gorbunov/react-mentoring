import { combineReducers } from 'redux';
import { searchQuery, searchType, movies } from './search';
import sortType from './sortType';

const appReducers = combineReducers({
  searchQuery,
  searchType,
  movies,
  sortType,
});

export default appReducers;
