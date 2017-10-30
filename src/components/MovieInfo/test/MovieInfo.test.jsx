import React from 'react';
import renderer from 'react-test-renderer';
import { MovieInfoView } from '..';
import { testMovie } from '../../../constants/stubs';

jest.mock('react-router-dom', () => ({ Link: 'Link' }));
const clickHandler = jest.fn();

describe('MovieInfo', () => {
  test('renders correctly', () => {
    const movieInfo = renderer.create(<MovieInfoView
      movie={testMovie}
      onSearchClick={clickHandler}
    />);
    expect(movieInfo).toMatchSnapshot();
  });
});
