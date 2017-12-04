import React from 'react';
import { hydrate } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './assets/styles/common.less';
import App from './components/App';
import appReducers from './reducers';

const store = createStore(appReducers);
const app = (
  <AppContainer>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </AppContainer>
);
const renderCallback = () => {
  hydrate(app, document.getElementById('app'));
};

renderCallback();

if (module.hot) {
  module.hot.accept('./components/App', renderCallback);
}
