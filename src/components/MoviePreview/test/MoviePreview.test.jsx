import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { testMovie, testMovieWoPosters } from '../../../constants/stubs';
import MoviePreview from '..';

const renderer = new ShallowRenderer();
const clickHandler = jest.fn();

describe('MoviePreview', () => {
  test('renders with poster', () => {
    const preview = renderer.render(<MoviePreview
      movie={testMovie}
      onMovieClick={clickHandler}
    />);
    expect(preview).toMatchSnapshot();
  });

  test('renders without poster', () => {
    const preview = renderer.render(<MoviePreview
      movie={testMovieWoPosters}
      onMovieClick={clickHandler}
    />);
    expect(preview).toMatchSnapshot();
  });
});
