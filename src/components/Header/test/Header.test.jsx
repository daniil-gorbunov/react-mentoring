import React from 'react';
import renderer from 'react-test-renderer';
import Header from '..';

jest.mock('react-router-dom', () => ({
  Switch: 'Switch',
  Route: 'Route',
}));
jest.mock('../../MovieInfo', () => 'MovieInfo');
jest.mock('../../SearchPanel', () => 'SearchPanel');
jest.mock('../../SortPanel', () => 'SortPanel');

describe('Header', () => {
  test('renders correctly', () => {
    const header = renderer.create(<Header />);
    expect(header).toMatchSnapshot();
  });
});
