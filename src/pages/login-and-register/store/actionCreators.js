import axios from 'axios';
import * as actionTypes from './actionTypes';

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
    const nickname = {
      value: nicknameValue.trim(),
      validateResult: {
        status: false,
        msg: ''
      }
    };

    // 非空验证
    if (!nickname.value) {
      nickname.validateResult.msg = '请输入昵称';
      dispatch(changeNicknameAction(nickname));
    }
    else {
      // 验证昵称是否已存在
      axios.post('http://127.0.0.1:7300/mock/5d130b34bbc69c047c619b06/jianshu/check_nickname', {
        nickname: nickname.value
      })
        .then((res) => {
          // 若昵称不存在
          if (res.data.success) {
            nickname.validateResult.status = true;
          }
          // 若昵称已存在
          else {
            nickname.validateResult.status = false;
            nickname.validateResult.msg = res.data.msg;
          }
        })
        .catch((err) => {
          nickname.validateResult.msg = '出错了，请刷新后重试';
        })
        .finally(() => {
          // 修改并保存nickname
          dispatch(changeNicknameAction(nickname));
        });
    }
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