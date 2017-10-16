import { orderBy } from 'lodash';
import {
  CHANGE_SEARCH_QUERY,
  CHANGE_SEARCH_TYPE,
  CHANGE_SORT_TYPE,
  SEARCH_MOVIES,
  SORT_MOVIES,
  OPEN_MOVIE,
  CLEAR_SEARCH,
} from '../constants/actionTypes';
import { SORT_TYPE_PARAMS_MAP } from '../constants/sortTypes';
import { MOVIE } from '../constants/searchTypes';

export const searchQuery = (state = '', action) => {
  switch (action.type) {
    case CHANGE_SEARCH_QUERY:
      return action.searchQuery;
    case CLEAR_SEARCH:
      return '';
    default:
      return state;
  }
};

export const searchType = (state = MOVIE, action) => {
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
    case CLEAR_SEARCH:
      return [];
    case SORT_MOVIES:
      return orderBy(action.movies, [SORT_TYPE_PARAMS_MAP[action.sortType]], ['desc']);
    default:
      return state;
  }
};

export const movie = (state = null, action) => {
  switch (action.type) {
    case OPEN_MOVIE:
      return action.movie;
    default:
      return state;
  }
};

export const sortType = (state = null, action) => {
  switch (action.type) {
    case CHANGE_SORT_TYPE:
      return action.sortType;
    default:
      return state;
  }
};
