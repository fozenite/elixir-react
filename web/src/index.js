import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import { Provider } from 'react-redux';
import store from './store';
import App from './containers/App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root')
);

