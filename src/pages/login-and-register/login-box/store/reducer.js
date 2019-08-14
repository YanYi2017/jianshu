import { fromJS } from 'immutable'; 
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
  loginStatus: false,
  account: '',
  password: '',
  supportListIsShow: false,
  errTip: {
    isShow: false,
    errMsg: ''
  }
});

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_LOGIN:
      return state.set('loginStatus', fromJS(action.loginStatus));
    case actionTypes.CHANGE_ACCOUNT:
      return state.set('account', fromJS(action.account));
    case actionTypes.CHANGE_PASSWORD:
      return state.set('password', fromJS(action.password));
    case actionTypes.TOGGLE_SUPPORT_LIST:
      return state.set('supportListIsShow', fromJS(action.isShow));
    case actionTypes.CHANGE_ERR_TIP:
      return state.set('errTip', fromJS({isShow: true, errMsg: action.errMsg}));
    case actionTypes.TOGGLE_ERR_TIP:
      return state.setIn(['errTip', 'isShow'], fromJS(action.isShow));
    default:
      return state;
  }
};

export default reducer;