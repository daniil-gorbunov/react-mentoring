import React from 'react';
import renderer from 'react-test-renderer';
import { testMovieList } from '../../../constants/stubs';
import { SearchResultsView } from '..';

jest.mock('../../MoviePreview', () => 'MoviePreview');
const clickHandler = jest.fn();

describe('SearchResults', () => {
  test('renders with movies', () => {
    const results = renderer.create(<SearchResultsView
      movies={testMovieList}
      onMovieClick={clickHandler}
    />);
    expect(results).toMatchSnapshot();
  });

  test('renders with empty movie list', () => {
    const preview = renderer.create(<SearchResultsView
      movies={[]}
      onMovieClick={clickHandler}
    />);
    expect(preview).toMatchSnapshot();
  });
});
