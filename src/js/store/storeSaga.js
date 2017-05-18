import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../saga/rootSaga';
import Reducers from '../reducers/';

// Variables
const sagaMiddleware = createSagaMiddleware();

// Check if there is prod or dev environment
function middlewareFunc() {
  const isProd = process.env.NODE_ENV === 'prod';

  const reduxDevToolExt = (!isProd && window.devToolsExtension)
    ? window.devToolsExtension()
    : f => f;

  const middlewares = [sagaMiddleware, reduxImmutableStateInvariant()];

  if (!isProd) {
    middlewares.push(createLogger());
  }

  return compose(applyMiddleware(...middlewares), reduxDevToolExt);
}


const store = createStore(Reducers, middlewareFunc());
sagaMiddleware.run(rootSaga);
export default store;
