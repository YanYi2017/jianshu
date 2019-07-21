import { fromJS } from 'immutable';

import * as constants from './constants';

const defaultState = fromJS({
  searchInput: '',
  isFocused: false,
  isShowed: false,
  mouseIn: false,
  list: [],
  page: 1,
  totalPage: 1,
  nightMode: constants.ON,
  fontFamily: constants.SIM_SUN,
  fontType: constants.SIMPLIFIED
});

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_SEARCH_INPUT:
      return state.set('searchInput', fromJS(action.input));
    case constants.TOGGLE_FOCUS:
      return state.set('isFocused', fromJS(action.isFocused));
    case constants.TOGGLE_LIST:
      return state.set('isShowed', fromJS(!state.get('isShowed')));
    case constants.CHANGE_TRENDING_LIST:
      return state.merge({
        totalPage: fromJS(action.totalPage),
        list: fromJS(action.list)
      });
    case constants.TOGGLE_MOUSE_IN:
      return state.set('mouseIn', fromJS(action.mouseIn));
    case constants.CHANGE_PAGE:
      return state.set('page', fromJS(action.page));
    case constants.CHANGE_NIGHT_MODE:
      return state.set('nightMode', fromJS(action.value));
    case constants.CHANGE_FONT_FAMILY:
      return state.set('fontFamily', fromJS(action.value));
    case constants.CHANGE_FONT_TYPE:
      return state.set('fontType', fromJS(action.value));
    default:
      return state;
  }
};

export default reducer;