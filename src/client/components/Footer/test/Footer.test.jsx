import React from 'react';
import renderer from 'react-test-renderer';
import Footer from '..';

describe('Footer', () => {
  test('renders correctly', () => {
    const footer = renderer.create(<Footer />);
    expect(footer).toMatchSnapshot();
  });
});
