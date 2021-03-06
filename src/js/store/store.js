import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import createLogger from 'redux-logger';
import Reducers from '../reducers';


// --- MIDDLEWARE ---//
/* Redux middleware is designed by creating functions that
* can be composed together before the main dispatch method is invoked.
* Middleware is created by composing functionality that wraps separate
* cross-cutting concerns which are not part of your main execution task.
*/

// --- THUNK ---//
/* Redux Thunk middleware allows you to write action creators
* that return a function instead of an action.
* The thunk can be used to delay the dispatch of an action,
* or to dispatch only if a certain condition is met
*/

// --- PROMISE ---//
/* Redux promise middleware enables robust handling of async code in Redux.
* The middleware enables optimistic updates and dispatches pending, fulfilled
* and rejected actions. It can be combined with redux-thunk to chain async actions.
* If you are curious to see how the middleware works, browse the source code on Sourcegraph!
*/

// --- LOGGER ---//
/* Logger must be the last middleware in chain, otherwise
* it will log thunk and promise, not actual actions
*/

// Check if the middlewares to apply are for prod or dev
function middlewareFunc() {
  const isProd = process.env.NODE_ENV === 'prod';

  const reduxDevToolExt = (!isProd && window.devToolsExtension)
    ? window.devToolsExtension()
    : f => f;

  const middlewares = [thunk, promise, reduxImmutableStateInvariant()];

  if (!isProd) {
    middlewares.push(createLogger());
  }

  return compose(applyMiddleware(...middlewares), reduxDevToolExt);
}

const store = createStore(Reducers, middlewareFunc());

export default store;
