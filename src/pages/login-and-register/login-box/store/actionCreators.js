import axios from 'axios';
import * as actionTypes from './actionTypes';

const changeLogin = () => ({
  type: actionTypes.CHANGE_LOGIN,
  loginStatus: true
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

export const changeAccount = account => ({
  type: actionTypes.CHANGE_ACCOUNT,
  account
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