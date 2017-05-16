import { combineReducers } from 'redux';
import HomeReducer from './HomeReducer';
import RoverReducer from './RoverReducer';

const reducers = combineReducers({
  Apod: HomeReducer,
  Rover: RoverReducer
});

export default reducers;
