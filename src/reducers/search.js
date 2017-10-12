import { sortBy } from 'lodash';
import { CHANGE_SEARCH_QUERY, CHANGE_SEARCH_TYPE, SEARCH_MOVIES, SORT_MOVIES } from '../constants/actionTypes';
import { SORT_TYPE_PARAMS_MAP } from '../constants/sortTypes';
import { TITLE } from '../constants/searchTypes';

export const searchQuery = (state = '', action) => {
  switch (action.type) {
    case CHANGE_SEARCH_QUERY:
      return action.searchQuery;
    default:
      return state;
  }
};

export const searchType = (state = TITLE, action) => {
  switch (action.type) {
    case CHANGE_SEARCH_TYPE:
      return action.searchType;
    default:
      return state;
  }
};

export const movies = (state = [], action) => {
  switch (action.type) {
    case SEARCH_MOVIES:
      return action.movies;
    case SORT_MOVIES:
      return sortBy(action.movies, [SORT_TYPE_PARAMS_MAP[action.sortType]], ['desc']);
    default:
      return state;
  }
};
