import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
  errTip: {
    isShow: false,
    errMsg: ''
  },
  nickname: {
    value: '',
    isFocused: false,
    validateResult: {
      status: false,
      msg: ''
    }
  },
  phone: {
    value: '',
    isFocused: false,
    validateResult: {
      status: false,
      msg: ''
    }
  },
  verification: {
    value: '',
    isFocused: false,
    validateResult: {
      status: false,
      msg: ''
    }
  },
  countdown: 0,
  password: {
    value: '',
    isFocused: false,
    validateResult: {
      status: false,
      msg: ''
    }
  }
});

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_ERR_TIP:
      return state.set('errTip', fromJS({ isShow: true, errMsg: action.errMsg }));
    case actionTypes.TOGGLE_ERR_TIP:
      return state.setIn(['errTip', 'isShow'], fromJS(action.isShow));

    case actionTypes.CHANGE_NICKNAME_VALUE:
      return state.setIn(['nickname', 'value'], fromJS(action.value));
    case actionTypes.TOGGLE_NICKNAME_FOCUS:
      return state.setIn(['nickname', 'isFocused'], fromJS(action.isFocused));
    case actionTypes.CHANGE_NICKNAME_VALIDATE_RESULT:
      return state.setIn(['nickname', 'validateResult'], fromJS(action.validateResult));

    case actionTypes.CHANGE_PHONE_VALUE:
      return state.setIn(['phone', 'value'], fromJS(action.value));
    case actionTypes.CHANGE_PHONE_VALIDATE_RESULT:
      return state.setIn(['phone', 'validateResult'], fromJS(action.validateResult));
    case actionTypes.TOGGLE_PHONE_FOCUS:
      return state.setIn(['phone', 'isFocused'], fromJS(action.isFocused));

    case actionTypes.CHANGE_VERIFICATION_VALUE:
      return state.setIn(['verification', 'value'], fromJS(action.value));
    case actionTypes.CHANGE_VERIFICATION_DISABLE:
      return state.setIn(['verification', 'buttonDisable'], fromJS(action.value));
    case actionTypes.CHANGE_VERIFICATION_VALIDATE_RESULT:
      return state.setIn(['verification', 'validateResult'], fromJS(action.validateResult));
    case actionTypes.TOGGLE_VERIFICATION_FOCUS:
      return state.setIn(['verification', 'isFocused'], fromJS(action.isFocused));
    case actionTypes.CHANGE_COUNTDOWN:
      return state.set('countdown', fromJS(action.countdown));

    case actionTypes.CHANGE_PASSWORD_VALUE:
      return state.setIn(['password', 'value'], fromJS(action.value));
    case actionTypes.TOGGLE_PASSWORD_FOCUS:
      return state.setIn(['password', 'isFocused'], fromJS(action.isFocused));
    case actionTypes.CHANGE_PASSWORD_VALIDATE_RESULT:
      return state.setIn(['password', 'validateResult'], fromJS(action.validateResult));
  
    default:
      return state;
  }
};

export default reducer;