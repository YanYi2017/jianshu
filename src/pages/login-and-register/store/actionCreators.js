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
    // 格式验证
    else if (!validate(nickname.value, 'nickname')) {
      nickname.validateResult.msg = '昵称 昵称格式不正确，需要是2-15个字符，只能包含英文中文数字和下划线，不能包含空格。';
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

const validate = (value, type) => {
  const valueTrimmed = value.trim();

  const nicknameRegExp = /^[\u4E00-\u9FA5A-za-z0-9_]{2,15}$/;
  
  if ('nickname' === type) {
    return nicknameRegExp.test(valueTrimmed);
  }
};