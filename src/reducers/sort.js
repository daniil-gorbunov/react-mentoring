import { CHANGE_SORT_TYPE } from '../constants/actionTypes';

export default (state = null, action) => {
  switch (action.type) {
    case CHANGE_SORT_TYPE:
      return action.sortType;
    default:
      return state;
  }
};
