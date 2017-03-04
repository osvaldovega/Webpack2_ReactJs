import { combineReducers } from 'redux';
import initState from '../store/initialState';
import * as types from '../actions/actionTypes';

function App(state = initState, action) {
  // Make a copy of the tabs from the state, this will be change
  const newTabs = Object.assign({}, state.tabs);

  switch (action.type) {
    case types.TAB_MENU_SELECTED:
      return state;
      break;

    case types.TAB_HOME_SELECTED:
      newTabs.home = action.payload;
      newTabs.about =  false;
      newTabs.contact = false;
      break;

    case types.TAB_ABOUT_SELECTED:
      newTabs.home = false;
      newTabs.about =  action.payload;
      newTabs.contact = false;
      break;

    case types.TAB_CONTACT_SELECTED:
      newTabs.home = false;
      newTabs.about =  false;
      newTabs.contact = action.payload;
      break;

    default:
      return state;
  }

  return {...state, tabs: newTabs};
};

const AppReducer = combineReducers({ App });

export default AppReducer;
