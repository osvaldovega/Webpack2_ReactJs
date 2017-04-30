import { combineReducers } from 'redux';
import initState from '../store/initialState';
import * as types from '../common/constants';

function App(state = initState, action) {
  // Make a copy of the tabs from the state, this will be change
  let newNasa = Object.assign({}, state.nasa);

  switch (action.type) {
    case types.FETCHING_DATA_SUCCESS:
      newNasa = action.payload;
      return {
        ...state,
        nasa: newNasa,
        errorFetching: {
          status: false,
          msg: ''
        },
        dataFetched: true
      };

    case types.FETCHING_DATA_ERROR:
      return {
        ...state,
        dataFetched: false,
        errorFetching: {
          status: true,
          msg: action.payload
        }
      };

    default:
      return state;
  }
}

const AppReducer = combineReducers({ App });

export default AppReducer;
