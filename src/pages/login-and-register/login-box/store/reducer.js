import { fromJS } from 'immutable'; 
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
  loginStatus: false,
  account: '',
  password: '',
  supportListIsShow: false
});

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_LOGIN:
      return state.set('loginStatus', fromJS(action.loginStatus))
    case actionTypes.CHANGE_ACCOUNT:
      return state.set('account', fromJS(action.account))
    case actionTypes.CHANGE_PASSWORD:
      return state.set('password', fromJS(action.password))
    case actionTypes.SHOW_SUPPORT_LIST:
      return state.set('supportListIsShow', fromJS(true))
    case actionTypes.HIDE_SUPPORT_LIST:
      return state.set('supportListIsShow', fromJS(false))
    default:
      return state;
  }
};

export default reducer;