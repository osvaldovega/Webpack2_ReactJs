// React and Redux Imports
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// Stores using THUNK and SAGA
import Store from '../store/store';
import SagaStore from '../store/storeSaga';

// HTML Container where data will be insert
const rootElement = document.getElementById('app');

// ----- STORE ------
// If you want to use REDUX THUNK you need to use in store => Store
// If you want to use REDUX SAGA you need to use in store => SagaStore
// ------------------
const activeStore = Store;
// const activeStore = SagaStore;

const ComponentToRender = (Component) => {
  ReactDOM.render(
    <Provider store={activeStore}>
      <Component />
    </Provider>,
    rootElement
  );
};

export default ComponentToRender;
