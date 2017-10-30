import React from 'react';
import renderer from 'react-test-renderer';
import { testMovie, testMovieWoPosters } from '../../../constants/stubs';
import MoviePreview from '..';

jest.mock('react-router-dom', () => ({ Link: 'Link' }));

describe('MoviePreview', () => {
  test('renders with poster', () => {
    const preview = renderer.create(<MoviePreview movie={testMovie} onMovieClick={() => {}} />);
    expect(preview).toMatchSnapshot();
  });

  test('renders without poster', () => {
    const preview = renderer.create(<MoviePreview
      movie={testMovieWoPosters}
      onMovieClick={() => {}}
    />);
    expect(preview).toMatchSnapshot();
  });
});
