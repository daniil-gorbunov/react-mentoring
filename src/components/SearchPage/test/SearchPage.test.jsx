import React from 'react';
import renderer from 'react-test-renderer';
import SearchPage from '..';

jest.mock('../../Header', () => 'Header');
jest.mock('../../SearchResults', () => 'SearchResults');
jest.mock('../../Footer', () => 'Footer');

describe('SearchPage', () => {
  test('renders correctly', () => {
    const searchPage = renderer.create(<SearchPage />);
    expect(searchPage).toMatchSnapshot();
  });
});
