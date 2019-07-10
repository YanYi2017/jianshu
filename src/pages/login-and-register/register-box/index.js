import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actionCreators } from './store';

import axios from 'axios';

import { RegisterMsg } from './components';

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

        <MoreSignWrapper>
          <h6>社交账号直接注册</h6>
          <MoreSignWay>
            <li>
              <a href='https://www.weibo.com/' target="_blank" rel="noopener noreferrer">
                <span className="iconfont ic-wechat">&#xe694;</span>
              </a>
            </li>
            <li>
              <a href='https://www.weibo.com/' target="_blank" rel="noopener noreferrer">
                <span className="iconfont ic-qq">&#xe608;</span>
              </a>
            </li>
          </MoreSignWay>
        </MoreSignWrapper>
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