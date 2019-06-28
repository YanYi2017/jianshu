import axios from 'axios';
import * as actionTypes from './actionTypes';

import { validate } from '../../../util';

const changeLogin = () => ({
  type: actionTypes.CHANGE_LOGIN,
  loginStatus: true
});

const changeLogout = () => ({
  type: actionTypes.CHANGE_LOGOUT,
  loginStatus: false
});

const changeNicknameAction = (nickname) => ({
  type: actionTypes.CHANGE_NICKNAME,
  nickname
});

export const login = (account, password) => {
  return (dispatch) => {
    axios.get(`/api/login.json?account=${account}&password=${password}`)
      .then((res) => {
        const success = res.data.success;
        if (success) {
          dispatch(changeLogin());
        } else {
          alert('登录失败');
        }
      });
  };
};

export const logout = () => {
  return (dispatch) => {
    axios.get(`/api/logout.json`)
      .then((res) => {
        const success = res.data.success;
        if (success) {
          dispatch(changeLogout());
        } else {
          alert('登录失败');
        }
      });
  };
};

export const changeAccount = account => ({
  type: actionTypes.CHANGE_ACCOUNT,
  account
});

export const changeNickname = nicknameValue => {
  return (dispatch) => {
    const nickname = {
      value: nicknameValue.trim(),
      validateResult: {
        status: false,
        msg: ''
      }
    };
    dispatch(changeNicknameAction(nickname));
  };
};

export const testNickname = nicknameValue => {
  return (dispatch) => {
    validateNickname(nicknameValue).then((validateResult) => {
      dispatch({
        type: actionTypes.CHANGE_NICKNAME_VALIDATERESULT,
        validateResult
      });
    });
  };
};

export const changePhone = phone => ({
  type: actionTypes.CHANGE_PHONE,
  phone
});

export const changePassword = password => ({
  type: actionTypes.CHANGE_PASSWORD,
  password
});

export const changeVerification = verification => ({
  type: actionTypes.CHANGE_VERIFICATION,
  verification
});

// 验证昵称，返回值为Promise
const validateNickname = async function (value) {
  const result = {
    status: false,
    msg: ''
  };
  // 非空验证
  if (!validate(value, 'required')) {
    result.msg = '请输入昵称';
    return result;
  }
  // 验证格式
  if (!validate(value, 'nickname')) {
    result.msg = '昵称 昵称格式不正确，需要是2-15个字符，只能包含英文中文数字和下划线，不能包含空格。';
    return result;
  }
  // 验证昵称是否已存在
  try {
    // 使用await等待异步验证结果
    const res = await axios.post('http://127.0.0.1:7300/mock/5d130b34bbc69c047c619b06/jianshu/check_nickname', {
      nickname: value
    });
    // 若昵称已存在
    if (!res.data.success) {
      result.msg = '昵称 昵称已被使用，换一个吧';
      return result;
    }
  } catch (err) {
    console.error(err);
    result.msg = '出错了，请刷新后重试';
    return result;
  }
  // 验证都通过
  result.status = true;
  return result;
};