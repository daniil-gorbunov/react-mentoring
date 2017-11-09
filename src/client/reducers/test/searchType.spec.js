import { searchType } from '../common';
import { CHANGE_SEARCH_TYPE } from '../../constants/actionTypes';
import { DEFAULT_SEARCH_TYPE } from '../../constants/searchTypes';

describe('searchType reducer', () => {
  it('should handle initial state', () => {
    expect(searchType(undefined, {})).toEqual(DEFAULT_SEARCH_TYPE);
  });

  it('should handle CHANGE_SEARCH_TYPE', () => {
    const newType = 'NEW_TYPE';
    expect(searchType('OLD_TYPE', {
      type: CHANGE_SEARCH_TYPE,
      searchType: newType,
    })).toEqual(newType);
  });
});
