import 'babel-polyfill';
import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { Provider } from 'react-redux';
import createdRoutes from './routes';
import App from './components/App.jsx';
import Store from './store/store';

let rootElement = document.getElementById('app');

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>, rootElement
);
