import 'babel-polyfill';
import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import createdRoutes from './routes';
import App from './components/App.jsx';
import AppReducer from './reducers/AppReducer';

const logger = createLogger();
const store = createStore(AppReducer, applyMiddleware(thunk, promise, logger));

let rootElement = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, rootElement
);
