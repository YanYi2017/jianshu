import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actionCreators } from './store';

import axios from 'axios';

import { NicknameInput, MobilePhoneInput, VerificationInput } from './containers';

import {
  StyledSideErrorTip,
  RegisterInput, Nickname, MobilePhone, Verification, UserPassword, SubmitButton, RegisterMsg,
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

        <UserPassword>
          <span className="iconfont ic-password">&#xe619;</span>
          <input 
            type="password"
            name="password" 
            placeholder="设置密码"
            value={password.get('result')}
            onChange={handlePasswordChange}
            onFocus={handlePasswordFocus}
            onBlur={handlePasswordBlur}
          />
          {
            (!password.get('focused') && password.getIn(['validateResult', 'msg'])) ? (
                <StyledSideErrorTip>
                  <div className="errorTip-arrow errorTip-arrow-border"></div>
                  <div className="errorTip-arrow errorTip-arrow-bg"></div>
                  <div className="errorTip-inner">
                    <span className="iconfont ic-error">&#xe63f;</span>
                    <span className="err-msg">
                      {password.getIn(['validateResult', 'msg'])}
                    </span>
                  </div>
                </StyledSideErrorTip>
            ) : null
          }
        </UserPassword>
        <SubmitButton type="button" onClick={() => handleRegister(nickname, password)}>注册</SubmitButton>
        <RegisterMsg>
          <p>点击 “注册” 即表示您同意并愿意遵守简书</p>
          <p>
            <Link>用户协议</Link>和<Link>隐私政策</Link>
          </p>
        </RegisterMsg>
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
  password: state.getIn(['registerReducer', 'password'])
});

const mapDispatchToProps = (dispatch) => ({
  handleRegister(nickname, phone, verification, password) {

  },

  handleVerificationDisableChange(disable) {
    dispatch(actionCreators.changeVerificationDisable(disable));
  },
  
  handlePasswordChange(e) {
    dispatch(actionCreators.changePassword(e.target.value));
  },
  handlePasswordFocus() {
    dispatch(actionCreators.focusPassword());
  },
  handlePasswordBlur() {
    dispatch(actionCreators.blurPassword());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ReBox);