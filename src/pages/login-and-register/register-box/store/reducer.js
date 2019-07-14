import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
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
    focused: false,
    validateResult: {
      status: false,
      msg: ''
    }
  }
});

const reducer = (state = defaultState, action) => {
  switch (action.type) {
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

    case actionTypes.CHANGE_PASSWORD:
      return state.set('password', fromJS(action.password));
    case actionTypes.FOCUS_PASSWORD:
      return state.setIn(['password', 'focused'], fromJS(true));
    case actionTypes.BLUR_PASSWORD:
      return state.setIn(['password', 'focused'], fromJS(false));
    default:
      return state;
  }
};

export default reducer;