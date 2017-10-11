import { combineReducers } from 'redux';
import searchQuery from './searchQuery';
import searchType from './searchType';
import sortType from './sortType';

const appReducers = combineReducers({
  searchQuery,
  searchType,
  sortType,
});

export default appReducers;
