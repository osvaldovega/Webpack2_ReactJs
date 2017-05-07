import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../saga/rootSaga';
import Reducers from '../reducers/';

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware, logger];
const store = createStore(Reducers, composeWithDevTools(applyMiddleware(...middleware)));

sagaMiddleware.run(rootSaga);

export default store;
