import { combineReducers } from 'redux';

function App(state = [], action) {
  switch (action.type) {
    case 'TAB_MENU_SELECTED':
      return {
        label: action.payload
      }
      break;

    default:
      return state;
  }

  return state;
};

const AppReducer = combineReducers({
  App
});

export default AppReducer;
