import axios from 'axios';
import * as actionTypes from './actionTypes';

import _util from '../../../../util';

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
        type: actionTypes.CHANGE_NICKNAME_VALIDATERESULT,
        validateResult
      });
    });
  };
};

export const changePhone = phoneValue => {
  return (dispatch) => {
    const phone = {
      value: phoneValue,
      focused: true,
      validateResult: {
        status: false,
        msg: ''
      }
    };

    // 验证输入的手机格式
    if (!_util.validate(phone.value, 'phone')) {
      if (phone.value) {
        phone.validateResult.msg = '手机号码格式不正确，请重新输入';
      } else {
        phone.validateResult.msg = '请输入手机号';
      }
    } else {
      phone.validateResult.status = true;
    }

    dispatch({
      type: actionTypes.CHANGE_PHONE,
      phone
    });
  }
};

export const focusPhone = () => ({
  type: actionTypes.FOCUS_PHONE
});

export const blurPhone = () => ({
  type: actionTypes.BLUR_PHONE
});

export const changeVerificationValue = value => ({
  type: actionTypes.CHANGE_VERIFICATION_VALUE,
  value
});

export const changeVerificationDisable = value => ({
  type: actionTypes.CHANGE_VERIFICATION_DISABLE,
  value
});

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

// 验证昵称，返回值为Promise
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