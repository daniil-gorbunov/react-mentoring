import { CHANGE_SEARCH_QUERY, CHANGE_SEARCH_TYPE, CHANGE_SORT_TYPE } from '../constants/actionTypes';

export const setSearchQuery = searchQuery => ({
  type: CHANGE_SEARCH_QUERY,
  searchQuery,
});

export const setSearchType = searchType => ({
  type: CHANGE_SEARCH_TYPE,
  searchType,
});

export const setSortType = sortType => ({
  type: CHANGE_SORT_TYPE,
  sortType,
});
