import { fromJS } from 'immutable';

import * as actionTypes from './actionTypes';

const defaultState = fromJS({
  searchInput: '',
  isFocused: false,
  isShowed: false,
  mouseIn: false,
  list: [],
  page: 1,
  totalPage: 1
});

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_SEARCH_INPUT:
      return state.set('searchInput', fromJS(action.input));
    case actionTypes.TOGGLE_FOCUS:
      return state.set('isFocused', fromJS(action.isFocused));
    case actionTypes.TOGGLE_LIST:
      return state.set('isShowed', fromJS(!state.get('isShowed')));
    case actionTypes.CHANGE_LIST:
      return state.merge({
        list: action.list,
        totalPage: action.totalPage
      });
    case actionTypes.MOUSE_ENTER:
      return state.set('mouseIn', true);
    case actionTypes.MOUSE_LEAVE:
      return state.set('mouseIn', false);
    case actionTypes.CHANGE_PAGE:
      return state.set('page', action.page);
    default:
      return state;
  }
};

export default reducer;