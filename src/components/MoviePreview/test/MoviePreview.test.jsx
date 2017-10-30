import React from 'react';
import renderer from 'react-test-renderer';
import { testMovie, testMovieWoPosters } from '../../../constants/stubs';
import MoviePreview from '..';

jest.mock('react-router-dom', () => ({ Link: 'Link' }));
const clickHandler = jest.fn();

describe('MoviePreview', () => {
  test('renders with poster', () => {
    const preview = renderer.create(<MoviePreview
      movie={testMovie}
      onMovieClick={clickHandler}
    />);
    expect(preview).toMatchSnapshot();
  });

  test('renders without poster', () => {
    const preview = renderer.create(<MoviePreview
      movie={testMovieWoPosters}
      onMovieClick={clickHandler}
    />);
    expect(preview).toMatchSnapshot();
  });
});
