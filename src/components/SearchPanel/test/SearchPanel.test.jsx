import React from 'react';
import renderer from 'react-test-renderer';
import { SearchPanelView } from '..';
import { TV_SHOW, MOVIE } from '../../../constants/searchTypes';

const clickHandler = jest.fn();
jest.mock('react-router-dom', () => ({ Link: 'Link' }));

describe('SortPanel', () => {
  describe('renders search query', () => {
    test('empty', () => {
      const preview = renderer.create(<SearchPanelView
        searchQuery={''}
        searchType={MOVIE}
        onQueryChange={clickHandler}
        onSearchClick={clickHandler}
        onSearchTypeClick={clickHandler}
      />);
      expect(preview).toMatchSnapshot();
    });

    test('not empty', () => {
      const preview = renderer.create(<SearchPanelView
        searchQuery={'kill bill'}
        searchType={TV_SHOW}
        onQueryChange={clickHandler}
        onSearchClick={clickHandler}
        onSearchTypeClick={clickHandler}
      />);
      expect(preview).toMatchSnapshot();
    });
  });

  describe('renders search type', () => {
    test('movie', () => {
      const preview = renderer.create(<SearchPanelView
        searchType={MOVIE}
        onQueryChange={clickHandler}
        onSearchClick={clickHandler}
        onSearchTypeClick={clickHandler}
      />);
      expect(preview).toMatchSnapshot();
    });

    test('TV show', () => {
      const preview = renderer.create(<SearchPanelView
        searchType={TV_SHOW}
        onQueryChange={clickHandler}
        onSearchClick={clickHandler}
        onSearchTypeClick={clickHandler}
      />);
      expect(preview).toMatchSnapshot();
    });
  });
});
