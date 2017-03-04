import * as types from './actionTypes';

// If you want to use just one action to handle the tab changes
export function selectedMenu(tab) {
  return {
    type: 'TAB_MENU_SELECTED',
    payload: tab
  };
};

// Handle each tab by separate
export function homeSelected() {
  return {
    type: types.TAB_HOME_SELECTED,
    payload: true
  };
}

export function aboutSelected() {
  return {
    type: types.TAB_ABOUT_SELECTED,
    payload: true
  };
}

export function contactSelected() {
  return {
    type: types.TAB_CONTACT_SELECTED,
    payload: true
  };
}
