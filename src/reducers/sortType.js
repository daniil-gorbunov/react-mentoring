import { CHANGE_SORT_TYPE } from '../constants/actionTypes';
import { RATING } from '../constants/sortTypes';

const sortType = (state = RATING, action) => {
  switch (action.type) {
    case CHANGE_SORT_TYPE:
      return action.sortType;
    default:
      return state;
  }
};

export default sortType;
