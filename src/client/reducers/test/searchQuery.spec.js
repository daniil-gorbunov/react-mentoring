import { searchQuery } from '../common';
import { CHANGE_SEARCH_QUERY, CLEAR_SEARCH } from '../../constants/actionTypes';

describe('searchQuery reducer', () => {
  it('should handle initial state', () => {
    expect(searchQuery(undefined, {})).toEqual('');
  });

  it('should handle CHANGE_SEARCH_QUERY', () => {
    const newQuery = 'New query';
    expect(searchQuery('', {
      type: CHANGE_SEARCH_QUERY,
      searchQuery: newQuery,
    })).toEqual(newQuery);
  });

  it('should handle CLEAR_SEARCH', () => {
    expect(searchQuery('some query', {
      type: CLEAR_SEARCH,
    })).toEqual('');
  });
});
