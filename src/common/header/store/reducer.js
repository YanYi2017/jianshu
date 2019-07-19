import { fromJS } from 'immutable';

import * as actionTypes from './actionTypes';

const defaultState = fromJS({
  searchInput: '',
  isFocused: false,
  isShowed: false,
  mouseIn: false,
  list: [],
  page: 1,
  totalPage: 10
});

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_SEARCH_INPUT:
      return state.set('searchInput', fromJS(action.input));
    case actionTypes.TOGGLE_FOCUS:
      return state.set('isFocused', fromJS(action.isFocused));
    case actionTypes.TOGGLE_LIST:
      return state.set('isShowed', fromJS(!state.get('isShowed')));
    case actionTypes.CHANGE_TRENDING_LIST:
      return state.merge({
        totalPage: fromJS(action.totalPage),
        list: fromJS(action.list)
      });
    case actionTypes.TOGGLE_MOUSE_IN:
      return state.set('mouseIn', fromJS(action.mouseIn));
    case actionTypes.CHANGE_PAGE:
      return state.set('page', fromJS(action.page));
    default:
      return state;
  }
};

export default reducer;