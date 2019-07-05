import { fromJS } from 'immutable'; 
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
  loginStatus: false,
  nickname: {
    value: '',
    validateResult: {
      status: false,
      msg: ''
    }
  },
  phone: {
    value: '',
    focused: false,
    validateResult: {
      status: false,
      msg: ''
    }
  },
  verification: {
    value: '',
    buttonDisable: false,
    validateResult: {
      status: false,
      msg: ''
    }
  },
  account: '',
  password: {
    value: '',
    focused: false,
    validateResult: {
      status: false,
      msg: ''
    }
  }
});

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_LOGIN:
      return state.set('loginStatus', fromJS(action.loginStatus))
    case actionTypes.CHANGE_LOGOUT:
      return state.set('loginStatus', fromJS(action.loginStatus))
    case actionTypes.CHANGE_NICKNAME:
      return state.set('nickname', fromJS(action.nickname))
    case actionTypes.CHANGE_NICKNAME_VALIDATERESULT:
      return state.setIn(['nickname', 'validateResult'], fromJS(action.validateResult))
    case actionTypes.CHANGE_PHONE:
      return state.set('phone', fromJS(action.phone))
    case actionTypes.FOCUS_PHONE:
      return state.setIn(['phone', 'focused'], fromJS(true))
    case actionTypes.BLUR_PHONE:
      return state.setIn(['phone', 'focused'], fromJS(false))
    case actionTypes.CHANGE_VERIFICATION_VALUE:
      return state.setIn(['verification', 'value'], fromJS(action.value))
    case actionTypes.CHANGE_VERIFICATION_DISABLE:
      return state.setIn(['verification', 'buttonDisable'], fromJS(action.value))
    case actionTypes.CHANGE_ACCOUNT:
      return state.set('account', fromJS(action.account))

    case actionTypes.CHANGE_PASSWORD:
      return state.set('password', fromJS(action.password))
    case actionTypes.FOCUS_PASSWORD:
      return state.setIn(['password', 'focused'], fromJS(true))
    case actionTypes.BLUR_PASSWORD:
      return state.setIn(['password', 'focused'], fromJS(false))

    default:
      return state;
  }
};

export default reducer;