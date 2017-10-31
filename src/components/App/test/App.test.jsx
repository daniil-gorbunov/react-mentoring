import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import App from '..';

const renderer = new ShallowRenderer();

describe('App', () => {
  test('renders correctly', () => {
    const app = renderer.render(<App />);
    expect(app).toMatchSnapshot();
  });
});
