import React from 'react';
import renderer from 'react-test-renderer';
import App from '..';

jest.mock('react-router-dom', () => ({
  BrowserRouter: 'BrowserRouter',
  Route: 'Route',
}));

describe('App', () => {
  test('renders correctly', () => {
    const app = renderer.create(<App />);
    expect(app).toMatchSnapshot();
  });
});
