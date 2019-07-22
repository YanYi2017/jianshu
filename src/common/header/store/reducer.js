import { fromJS } from 'immutable';

import * as actionTypes from './actionTypes';
import * as constants from '../../constants';

const defaultState = fromJS({
  searchInput: '',
  isFocused: false,
  isShowed: false,
  mouseIn: false,
  modeListIsShowed: false,
  list: [],
  page: 1,
  totalPage: 1,
  nightMode: constants.OFF,
  fontFamily: constants.SIM_HEI,
  fontType: constants.SIMPLIFIED
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
    case actionTypes.CHANGE_NIGHT_MODE:
      return state.set('nightMode', fromJS(action.value));
    case actionTypes.CHANGE_FONT_FAMILY:
      return state.set('fontFamily', fromJS(action.value));
    case actionTypes.CHANGE_FONT_TYPE:
      return state.set('fontType', fromJS(action.value));
    case actionTypes.TOGGLE_MODE_LIST:
      return state.set('modeListIsShowed', fromJS(action.value));
    default:
      return state;
  }
};

export default reducer;