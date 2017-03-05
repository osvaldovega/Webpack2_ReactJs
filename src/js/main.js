import 'babel-polyfill';
import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { Provider } from 'react-redux';
import CreateRoutes from './routes';
import Store from './store/store';

const rootElement = document.getElementById('app');

ReactDOM.render(
  <Provider store={Store}>
    <CreateRoutes />
  </Provider>, rootElement);
