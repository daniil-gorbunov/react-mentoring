import { CHANGE_SEARCH_QUERY, CHANGE_SEARCH_TYPE, SEARCH_MOVIES } from '../constants/actionTypes';
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
    default:
      return state;
  }
};
