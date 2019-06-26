import { fromJS } from 'immutable'; 
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
  loginStatus: false,
  nickname: 'hhh',
  phone: 1112344,
  verification: 2222,
  account: '',
  password: 134914
});

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_LOGIN:
      return state.set('loginStatus', fromJS(action.loginStatus))
    case actionTypes.CHANGE_LOGOUT:
      return state.set('loginStatus', fromJS(action.loginStatus))
    case actionTypes.CHANGE_NICKNAME:
      return state.set('nickname', fromJS(action.nickname))
    case actionTypes.CHANGE_PHONE:
      return state.set('phone', fromJS(action.phone))
    case actionTypes.CHANGE_VERIFICATION:
      return state.set('verification', fromJS(action.verification))
    case actionTypes.CHANGE_ACCOUNT:
      return state.set('account', fromJS(action.account))
    case actionTypes.CHANGE_PASSWORD:
      return state.set('password', fromJS(action.password))
    default:
      return state;
  }
};

export default reducer;