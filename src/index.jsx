import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './assets/styles/common.less';
import App from './components/App';
import { TITLE } from './constants/searchTypes';
import { RATING } from './constants/sortTypes';
import appReducers from './reducers';

const initialState = {
  movies: [],
  searchMovies: [],
  movie: null,
  searchQuery: '',
  searchType: TITLE,
  sortType: RATING,
};
const store = createStore(appReducers, initialState);

const renderCallback = () => {
  render(
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
