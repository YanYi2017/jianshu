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

const changeNicknameCheckMsgAction = (nicknameCheckMsg) => ({
  type: actionTypes.CHANGE_NICKNAME_CHECK_MSG,
  nicknameCheckMsg
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

export const changeNickname = nickname => {
  return (dispatch) => {
    axios.post('https://www.easy-mock.com/mock/5d03a12f2c12171b16c11917/jianshu/check_nickname', {
      nickname: nickname
    })
    .then((res) => {
        const success = res.data.success;
        if (success) {
          dispatch(changeNicknameAction(nickname));
        } else {
          dispatch(changeNicknameCheckMsgAction(res.data.msg));
        }
    })
    .catch((err) => {
      console.log('出错了，请刷新后重试');
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