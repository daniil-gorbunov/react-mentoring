import { CHANGE_SEARCH_TYPE } from '../constants/actionTypes';
import { TITLE } from '../constants/searchTypes';

const searchType = (state = TITLE, action) => {
  switch (action.type) {
    case CHANGE_SEARCH_TYPE:
      return action.searchType;
    default:
      return state;
  }
};

export default searchType;
