import { sortType } from '../common';
import { CHANGE_SORT_TYPE } from '../../constants/actionTypes';

describe('sortType reducer', () => {
  it('should handle initial state', () => {
    expect(sortType(undefined, {})).toEqual(null);
  });

  it('should handle CHANGE_SORT_TYPE', () => {
    const newType = 'NEW_TYPE';
    expect(sortType('OLD_TYPE', {
      type: CHANGE_SORT_TYPE,
      sortType: newType,
    })).toEqual(newType);
  });
});
