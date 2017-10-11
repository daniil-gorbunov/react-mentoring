import { CHANGE_SEARCH_QUERY } from '../constants/actionTypes';

const searchQuery = (state = '', action) => {
  switch (action.type) {
    case CHANGE_SEARCH_QUERY:
      return action.searchQuery;
    default:
      return state;
  }
};

export default searchQuery;
