import React from 'react';
import { connect } from 'react-redux';

import { actionCreators } from '../store';
import { StyledSubmitButton } from '../style';

function SubmitButton({ account, password, handleLogin }) {
  return (
    <StyledSubmitButton
      type="button"
      onClick={() => handleLogin(account, password)}
    >
      登录
    </StyledSubmitButton>
  );
}

const mapStateToProps = (state) => ({
  account: state.getIn(['loginReducer', 'account']),
  password: state.getIn(['loginReducer', 'password'])
});

const mapDispatchToProps = (dispatch) => ({
  handleLogin(account, password) {
    if (account && password) {
      dispatch(actionCreators.login(account, password));
    } else {
      alert('手机号码/邮箱地址或密码不能为空');
    }
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SubmitButton);