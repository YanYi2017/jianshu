import { fromJS } from 'immutable'; 
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
  loginStatus: false,
  account: '',
  password: '',
  showSupportList: true
});

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_LOGIN:
      return state.set('loginStatus', fromJS(action.loginStatus))
    case actionTypes.CHANGE_ACCOUNT:
      return state.set('account', fromJS(action.account))
    case actionTypes.CHANGE_PASSWORD:
      return state.set('password', fromJS(action.password))
    default:
      return state;
  }
};

export default reducer;