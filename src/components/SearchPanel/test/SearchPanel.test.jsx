import React from 'react';
import renderer from 'react-test-renderer';
import { SearchPanelView } from '..';
import { TV_SHOW, MOVIE } from '../../../constants/searchTypes';

const clickHandler = jest.fn();
jest.mock('react-router-dom', () => ({ Link: 'Link' }));

describe('SortPanel', () => {
  describe('renders search query', () => {
    test('empty', () => {
      const searchPanel = renderer.create(<SearchPanelView
        searchQuery={''}
        searchType={MOVIE}
        onQueryChange={clickHandler}
        onSearchClick={clickHandler}
        onSearchTypeClick={clickHandler}
      />);
      expect(searchPanel).toMatchSnapshot();
    });

    test('not empty', () => {
      const searchPanel = renderer.create(<SearchPanelView
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
      const searchPanel = renderer.create(<SearchPanelView
        searchType={MOVIE}
        onQueryChange={clickHandler}
        onSearchClick={clickHandler}
        onSearchTypeClick={clickHandler}
      />);
      expect(searchPanel).toMatchSnapshot();
    });

    test('TV show', () => {
      const searchPanel = renderer.create(<SearchPanelView
        searchType={TV_SHOW}
        onQueryChange={clickHandler}
        onSearchClick={clickHandler}
        onSearchTypeClick={clickHandler}
      />);
      expect(searchPanel).toMatchSnapshot();
    });
  });
});
