import { fromJS } from 'immutable';

import * as actionTypes from './actionTypes';
import * as constants from '../../constants';

const defaultState = fromJS({
  searchInput: '',
  searchInputIsFocused: false,
  navListIsShowed: false,
  mouseInSearchTrending: false,
  list: [],
  page: 1,
  totalPage: 1,
  nightMode: constants.OFF,
  modeListIsShowed: false,
  fontFamily: constants.SIM_HEI,
  fontType: constants.SIMPLIFIED,
  appAdIsShowed: false
});

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_SEARCH_INPUT:
      return state.set('searchInput', fromJS(action.input));
    case actionTypes.TOGGLE_SEARCH_INPUT_FOCUS:
      return state.set('searchInputIsFocused', fromJS(action.searchInputIsFocused));
    case actionTypes.TOGGLE_NAV_LIST:
      return state.set('navListIsShowed', fromJS(!state.get('navListIsShowed')));
    case actionTypes.CHANGE_TRENDING_LIST:
      return state.merge({
        totalPage: fromJS(action.totalPage),
        list: fromJS(action.list)
      });
    case actionTypes.TOGGLE_MOUSE_IN_SEARCH_TRENDING:
      return state.set('mouseInSearchTrending', fromJS(action.mouseIn));
    case actionTypes.CHANGE_PAGE:
      return state.set('page', fromJS(action.page));
      case actionTypes.TOGGLE_MODE_LIST:
        return state.set('modeListIsShowed', fromJS(action.value));
    case actionTypes.CHANGE_NIGHT_MODE:
      return state.set('nightMode', fromJS(action.value));
    case actionTypes.CHANGE_FONT_FAMILY:
      return state.set('fontFamily', fromJS(action.value));
    case actionTypes.CHANGE_FONT_TYPE:
      return state.set('fontType', fromJS(action.value));
    case actionTypes.TOGGLE_APP_AD:
      return state.set('appAdIsShowed', fromJS(!state.get('appAdIsShowed')));
    default:
      return state;
  }
};

export default reducer;