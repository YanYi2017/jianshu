import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actionCreators } from './store';

import axios from 'axios';

import { RegisterMsg, MoreRegisterWay } from './components';

import { NicknameInput, MobilePhoneInput, VerificationInput, PasswordInput, SubmitButton } from './containers';

import {
  RegisterInput,
  MoreSignWrapper, MoreSignWay
} from './style';

class ReBox extends PureComponent {
  componentDidMount() {
    // 处理验证码
    const { handleVerificationDisableChange } = this.props;
  }

  render() {
    const { 
      nickname, phone,verification, password, 
      handleRegister, handleNicknameChange, handleNicknameBlur,
      handlePhoneChange, handlePhoneFocus, handlePhoneBlur,
      handleVerificationValueChange,
      handlePasswordChange, handlePasswordFocus, handlePasswordBlur
    } = this.props;

    return (
      <RegisterInput>
        <NicknameInput />
        <MobilePhoneInput />
        <VerificationInput />
        <PasswordInput />
        <SubmitButton />
        <RegisterMsg />
        <MoreRegisterWay />
      </RegisterInput>
    );
  }
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  handleVerificationDisableChange(disable) {
    dispatch(actionCreators.changeVerificationDisable(disable));
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(ReBox);