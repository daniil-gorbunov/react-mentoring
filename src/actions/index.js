import axios from 'axios';
import {
  CHANGE_SEARCH_QUERY,
  CHANGE_SEARCH_TYPE,
  CHANGE_SORT_TYPE,
  SORT_MOVIES,
  SEARCH_MOVIES,
  OPEN_MOVIE,
  CLEAR_SEARCH,
} from '../constants/actionTypes';
import { SEARCH_TYPE_PARAMS_MAP } from '../constants/searchTypes';
import { BASE_URL, V3_KEY } from '../constants/api';
import buildMovie from '../services/moviesService';

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

export const sortMovies = (movies, sortType) => ({
  type: SORT_MOVIES,
  sortType,
  movies,
});

export const searchMovies = (dispatch, searchQuery, searchType) => {
  dispatch({
    type: 'SEARCH_STARTED',
  });

  const params = {
    api_key: V3_KEY,
    query: searchQuery,
  };

  axios.get(`${BASE_URL}search/${SEARCH_TYPE_PARAMS_MAP[searchType]}`, { params })
    .then(({ data: { results } }) => dispatch({
      type: SEARCH_MOVIES,
      movies: results.map(md => buildMovie(md)),
    }))
    .catch(() => dispatch({
      type: SEARCH_MOVIES,
      movies: [],
    }));
};

export const openMovie = movie => ({
  type: OPEN_MOVIE,
  movie,
});

export const clearSearch = () => ({
  type: CLEAR_SEARCH,
});
