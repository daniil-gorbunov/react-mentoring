import { movie } from '../common';
import { OPEN_MOVIE } from '../../constants/actionTypes';
import { testMovie } from '../../constants/stubs';

describe('movie reducer', () => {
  it('should handle initial state', () => {
    expect(movie(undefined, {})).toEqual(null);
  });

  it('should handle OPEN_MOVIE', () => {
    expect(movie(null, {
      type: OPEN_MOVIE,
      movie: testMovie,
    })).toEqual(testMovie);
  });
});
