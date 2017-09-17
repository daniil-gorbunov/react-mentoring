import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './components/App';

const renderCallback = () => {
  render(
    <AppContainer>
      <App />
    </AppContainer>,
    document.getElementById('app'),
  );
};

renderCallback();

if (module.hot) {
  module.hot.accept('./components/App', renderCallback);
}
