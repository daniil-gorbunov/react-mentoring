import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import SearchPage from '..';

const renderer = new ShallowRenderer();

describe('SearchPage', () => {
  test('renders correctly', () => {
    const searchPage = renderer.render(<SearchPage />);
    expect(searchPage).toMatchSnapshot();
  });
});
