import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Header from '..';

const renderer = new ShallowRenderer();

describe('Header', () => {
  test('renders correctly', () => {
    const header = renderer.render(<Header />);
    expect(header).toMatchSnapshot();
  });
});
