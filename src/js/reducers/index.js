import { combineReducers } from 'redux';
import HomeReducer from './HomeReducer';

const reducers = combineReducers({
  universe: HomeReducer
});

export default reducers;
