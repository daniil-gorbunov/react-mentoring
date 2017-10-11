import { isArray } from 'lodash';
import { CHANGE_SEARCH_QUERY, CHANGE_SEARCH_TYPE, CHANGE_SORT_TYPE, SEARCH_MOVIES } from '../constants/actionTypes';
import { SEARCH_TYPE_PARAMS_MAP } from '../constants/searchTypes';
import API_BASE_URL from '../constants/apiUrls';

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

export const searchMovies = (dispatch, searchQuery, searchType) => {
  dispatch({
    type: 'SEARCH_STARTED',
  });

  const params = {
    [SEARCH_TYPE_PARAMS_MAP[searchType]]: searchQuery,
  };
  const query = Object.keys(params)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    .join('&');

  fetch(`${API_BASE_URL}?${query}`)
    .then(response => response.json())
    .then(movies => dispatch({
      type: SEARCH_MOVIES,
      movies: isArray(movies) ? movies : [movies],
    }))
    .catch(() => dispatch({
      type: SEARCH_MOVIES,
      movies: [],
    }));
};
