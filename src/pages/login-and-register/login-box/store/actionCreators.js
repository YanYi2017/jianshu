import axios from 'axios';
import * as actionTypes from './actionTypes';

import _util from '../../../../util';

export const login = (account, password) => {
  return (dispatch) => {
    axios.post(_util.getServerURL('/login'), {
      account,
      password
    })
      .then((res) => {
        const { success, msg } = res.data;
        if (success) {
          dispatch({
            type: actionTypes.CHANGE_LOGIN,
            loginStatus: true
          });
        } else {
          dispatch(changeErrTip(msg));
        }
      })
      .catch((err) => dispatch(changeErrTip(err)));
  };
};

export const changeAccount = account => ({
  type: actionTypes.CHANGE_ACCOUNT,
  account
});

export const changePassword = password => ({
  type: actionTypes.CHANGE_PASSWORD,
  password
});

export const showSupportList = () => ({
  type: actionTypes.SHOW_SUPPORT_LIST
});

export const hideSupportList = () => ({
  type: actionTypes.HIDE_SUPPORT_LIST
});

export const changeErrTip = (errMsg) => ({
  type: actionTypes.CHANGE_ERR_TIP,
  errMsg
});

export const toggleErrTip = (isShow) => ({
  type: actionTypes.TOGGLE_ERR_TIP,
  isShow
});