import React from 'react';
import renderer from 'react-test-renderer';
import { testMovie, testMovieWoPosters } from '../../../constants/stubs';
import { SortPanelView } from '..';
import { DATE, RATING } from '../../../constants/sortTypes';

const clickHandler = jest.fn();

describe('SortPanel', () => {
  test('renders with movies', () => {
    const sortPanel = renderer.create(<SortPanelView
      movies={[testMovie, testMovieWoPosters]}
      onSortTypeClick={clickHandler}
    />);
    expect(sortPanel).toMatchSnapshot();
  });

  test('renders with empty movie list', () => {
    const sortPanel = renderer.create(<SortPanelView
      movies={[]}
      onSortTypeClick={clickHandler}
    />);
    expect(sortPanel).toMatchSnapshot();
  });

  describe('renders sort by', () => {
    test('date', () => {
      const sortPanel = renderer.create(<SortPanelView
        movies={[]}
        sortType={DATE}
        onSortTypeClick={clickHandler}
      />);
      expect(sortPanel).toMatchSnapshot();
    });

    test('rating', () => {
      const sortPanel = renderer.create(<SortPanelView
        movies={[]}
        sortType={RATING}
        onSortTypeClick={clickHandler}
      />);
      expect(sortPanel).toMatchSnapshot();
    });
  });
});
