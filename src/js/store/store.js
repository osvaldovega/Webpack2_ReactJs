import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import Reducers from '../reducers/AppReducer';


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

const logger = createLogger();
const middleware = [thunk, promise, logger];
const store = createStore(Reducers, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
