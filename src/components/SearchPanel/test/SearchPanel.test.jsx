import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { SearchPanelView } from '..';
import { TV_SHOW, MOVIE } from '../../../constants/searchTypes';

const renderer = new ShallowRenderer();
const clickHandler = jest.fn();

describe('SortPanel', () => {
  describe('renders search query', () => {
    test('empty', () => {
      const searchPanel = renderer.render(<SearchPanelView
        searchQuery={''}
        searchType={MOVIE}
        onQueryChange={clickHandler}
        onSearchClick={clickHandler}
        onSearchTypeClick={clickHandler}
      />);
      expect(searchPanel).toMatchSnapshot();
    });

    test('not empty', () => {
      const searchPanel = renderer.render(<SearchPanelView
        searchQuery={'kill bill'}
        searchType={TV_SHOW}
        onQueryChange={clickHandler}
        onSearchClick={clickHandler}
        onSearchTypeClick={clickHandler}
      />);
      expect(searchPanel).toMatchSnapshot();
    });
  });

  describe('renders search type', () => {
    test('movie', () => {
      const searchPanel = renderer.render(<SearchPanelView
        searchType={MOVIE}
        onQueryChange={clickHandler}
        onSearchClick={clickHandler}
        onSearchTypeClick={clickHandler}
      />);
      expect(searchPanel).toMatchSnapshot();
    });

    test('TV show', () => {
      const searchPanel = renderer.render(<SearchPanelView
        searchType={TV_SHOW}
        onQueryChange={clickHandler}
        onSearchClick={clickHandler}
        onSearchTypeClick={clickHandler}
      />);
      expect(searchPanel).toMatchSnapshot();
    });
  });
});
