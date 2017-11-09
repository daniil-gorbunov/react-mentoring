import React from 'react';
import { hydrate } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './assets/styles/common.less';
import App from './components/App';
import appReducers from './reducers';

const store = createStore(appReducers);

const renderCallback = () => {
  hydrate(
    <AppContainer>
      <Provider store={store}>
        <App />
      </Provider>
    </AppContainer>,
    document.getElementById('app'),
  );
};

renderCallback();

if (module.hot) {
  module.hot.accept('./components/App', renderCallback);
}
