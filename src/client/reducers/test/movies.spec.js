import { movies } from '../common';
import { SEARCH_MOVIES, CLEAR_SEARCH, SORT_MOVIES } from '../../constants/actionTypes';
import { DATE, RATING } from '../../constants/sortTypes';
import { testMovieList } from '../../constants/stubs';

describe('movies reducer', () => {
  it('should handle initial state', () => {
    expect(movies(undefined, {})).toEqual([]);
  });

  it('should handle SEARCH_MOVIES', () => {
    expect(movies('', {
      type: SEARCH_MOVIES,
      movies: testMovieList,
    })).toEqual(testMovieList);
  });

  it('should handle CLEAR_SEARCH', () => {
    expect(movies(testMovieList, {
      type: CLEAR_SEARCH,
    })).toEqual([]);
  });

  describe('handling SORT_MOVIES', () => {
    const unsortedMovies = [
      {
        id: 1,
        title: 'Old Movie',
        release_date: '2010-01-01',
        vote_average: '1',
      },
      {
        id: 2,
        title: 'Newest Movie',
        release_date: '2017-01-01',
        vote_average: '10',
      },
      {
        id: 3,
        title: 'Most Popular Movie',
        release_date: '2017-01-01',
        vote_average: '1000',
      },
    ];

    it('should sort by DATE', () => {
      expect(movies(unsortedMovies, {
        type: SORT_MOVIES,
        movies: unsortedMovies,
        sortType: DATE,
      })[0].id).toEqual(unsortedMovies[1].id);
    });

    it('should sort by RATING', () => {
      expect(movies(unsortedMovies, {
        type: SORT_MOVIES,
        movies: unsortedMovies,
        sortType: RATING,
      })[0].id).toEqual(unsortedMovies[2].id);
    });
  });
});
