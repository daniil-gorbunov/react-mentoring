import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { MovieInfoView } from '..';
import { testMovie } from '../../../constants/stubs';

const renderer = new ShallowRenderer();
const clickHandler = jest.fn();

describe('MovieInfo', () => {
  test('renders correctly', () => {
    const movieInfo = renderer.render(<MovieInfoView
      movie={testMovie}
      onSearchClick={clickHandler}
    />);
    expect(movieInfo).toMatchSnapshot();
  });
});
