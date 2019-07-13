import axios from 'axios';
import * as actionTypes from './actionTypes';

import _util from '../../../../util';

// 昵称相关action
export const changeNicknameValue = value => ({
  type: actionTypes.CHANGE_NICKNAME_VALUE,
  value
});

export const toggleNicknameFocus = (isFocused) => ({
  type: actionTypes.TOGGLE_NICKNAME_FOCUS,
  isFocused
});

export const changeNicknameValidateResult = nicknameValue => {
  return (dispatch) => {
    validateNickname(nicknameValue).then((validateResult) => {
      dispatch({
        type: actionTypes.CHANGE_NICKNAME_VALIDATE_RESULT,
        validateResult
      });
    });
  };
};

// 手机号相关action
export const changePhoneValue = (value) => ({
  type: actionTypes.CHANGE_PHONE_VALUE,
  value
});

export const changePhoneValidateResult = (value) => {
  return (dispatch) => {
    const validateResult = validatePhone(value);
    dispatch({
      type: actionTypes.CHANGE_PHONE_VALIDATE_RESULT,
      validateResult
    });
  }
}

export const togglePhoneFocus = (isFocused) => ({
  type: actionTypes.TOGGLE_PHONE_FOCUS,
  isFocused
});

// 验证码相关action
export const changeVerificationValue = value => ({
  type: actionTypes.CHANGE_VERIFICATION_VALUE,
  value
});

export const changeVerificationVelidateResult = value => {
  return dispatch => {
    const validateResult = validateVerification(value);
    dispatch({
      type: actionTypes.CHANGE_VERIFICATION_VALIDATE_RESULT,
      validateResult
    });
  }
};

export const toggleVerificationFocus = isFocused => ({
  type: actionTypes.TOGGLE_VERIFICATION_FOCUS,
  isFocused
});

export const changeVerificationDisable = value => ({
  type: actionTypes.CHANGE_VERIFICATION_DISABLE,
  value
});

// 密码相关action
export const changePassword = passwordValue => {
  return (dispatch) => {
    const password = {
      value: passwordValue,
      focused: true,
      validateResult: {
        status: false,
        msg: ''
      }
    };

    if (password.value.length < 6) {
      password.validateResult.msg = '密码不能少于6个字符';
    } else {
      password.validateResult.status = true;
    }

    dispatch({
      type: actionTypes.CHANGE_PASSWORD,
      password
    });
  };
}

export const focusPassword = () => (
  {
    type: actionTypes.FOCUS_PASSWORD
  }
);

export const blurPassword = () => (
  {
    type: actionTypes.BLUR_PASSWORD
  }
);

// 检验昵称，返回值为Promise
const validateNickname = async function (value) {
  const result = {
    status: false,
    msg: ''
  };
  // 非空验证
  if (!_util.validate(value, 'required')) {
    result.msg = '请输入昵称';
    return result;
  }
  // 验证格式
  if (!_util.validate(value, 'nickname')) {
    result.msg = '昵称 昵称格式不正确，需要是2-15个字符，只能包含英文中文数字和下划线，不能包含空格。';
    return result;
  }
  // 验证昵称是否已存在
  try {
    // 使用await等待异步验证结果
    const res = await axios.post(_util.getServerURL('/check_nickname'), {
      nickname: value
    });
    // 若昵称已存在
    if (!res.data.success) {
      result.msg = res.data.msg;
      return result;
    }
  } catch (err) {
    result.msg = '出错了，请刷新后重试';
    return result;
  }
  // 验证都通过
  result.status = true;
  return result;
};

// 检验手机号
const validatePhone = (value) => {
  const result = {
    status: false,
    msg: ''
  };

  if (!_util.validate(value, 'required')) {
    result.msg = '请输入手机号';
    return result;
  }

  if (!_util.validate(value, 'phone')) {
    result.msg = '手机号码格式不正确，请重新输入';
    return result;
  }

  result.status = true;
  return result;
};

// 检验验证码
const validateVerification = value => {
  const result = {
    status: false,
    msg: ''
  };

  if (!_util.validate(value, 'required')) {
    result.msg = '请输入验证码';
    return result;
  }

  result.status = true;
  return result;
};