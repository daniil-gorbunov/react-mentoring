import React from 'react';
import renderer from 'react-test-renderer';
import { testMovie, testMovieWoPosters } from '../../../constants/stubs';
import { SortPanelView } from '..';
import { DATE, RATING } from '../../../constants/sortTypes';

jest.mock('../../MoviePreview', () => 'MoviePreview');
const clickHandler = jest.fn();

describe('SortPanel', () => {
  test('renders with movies', () => {
    const results = renderer.create(<SortPanelView
      movies={[testMovie, testMovieWoPosters]}
      onSortTypeClick={clickHandler}
    />);
    expect(results).toMatchSnapshot();
  });

  test('renders with empty movie list', () => {
    const preview = renderer.create(<SortPanelView
      movies={[]}
      onSortTypeClick={clickHandler}
    />);
    expect(preview).toMatchSnapshot();
  });

  describe('renders sort by', () => {
    test('date', () => {
      const preview = renderer.create(<SortPanelView
        movies={[]}
        sortType={DATE}
        onSortTypeClick={clickHandler}
      />);
      expect(preview).toMatchSnapshot();
    });

    test('rating', () => {
      const preview = renderer.create(<SortPanelView
        movies={[]}
        sortType={RATING}
        onSortTypeClick={clickHandler}
      />);
      expect(preview).toMatchSnapshot();
    });
  });
});
