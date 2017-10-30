import React from 'react';
import renderer from 'react-test-renderer';
import { testMovie, testMovieWoPosters } from '../../../constants/stubs';
import { SearchResultsView } from '..';

jest.mock('../../MoviePreview', () => 'MoviePreview');

describe('SearchResults', () => {
  test('renders with movies', () => {
    const results = renderer.create(<SearchResultsView
      movies={[testMovie, testMovieWoPosters]}
      onMovieClick={() => {}}
    />);
    expect(results).toMatchSnapshot();
  });

  test('renders with empty movie list', () => {
    const preview = renderer.create(<SearchResultsView movies={[]} onMovieClick={() => {}} />);
    expect(preview).toMatchSnapshot();
  });
});
