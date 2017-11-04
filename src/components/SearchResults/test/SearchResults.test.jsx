import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { testMovieList } from '../../../constants/stubs';
import { SearchResultsView } from '..';

const renderer = new ShallowRenderer();
const clickHandler = jest.fn();

describe('SearchResults', () => {
  test('renders with movies', () => {
    const results = renderer.render(<SearchResultsView
      movies={testMovieList}
      onMovieClick={clickHandler}
    />);
    expect(results).toMatchSnapshot();
  });

  test('renders with empty movie list', () => {
    const preview = renderer.render(<SearchResultsView
      movies={[]}
      onMovieClick={clickHandler}
    />);
    expect(preview).toMatchSnapshot();
  });
});
