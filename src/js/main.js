import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import CreateRoutes from './routes.jsx';
import Store from './store/store';
import SagaStore from './store/storeSaga';

const rootElement = document.getElementById('app');

// ----- STORE ------
// If you want to use REDUX THUNK you need to use in store => Store
// If you want to use REDUX SAGA you need to use in store => SagaStore
// ------------------

const activeStore = Store;
// const activeStore = SagaStore;

ReactDOM.render(
  <Provider store={activeStore}>
    <CreateRoutes />
  </Provider>, rootElement);
