import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actionCreators } from '../../store';

import {
  RegisterInput, Nickname, MobilePhone, Verification, UserPassword, SubmitButton, RegisterMsg,
  MoreSignWrapper, MoreSignWay
} from './style';

class ReBox extends PureComponent {
  render() {
    const { 
      nickname, phone, password, 
      handleRegister, handleNicknameChange, handlePhoneChange, 
      handleVerificationChange, handlePasswordChange 
    } = this.props;

    return (
      <RegisterInput>
        <Nickname className="text-input">
          <input 
            type="text"
            name="nickname"
            placeholder="你的昵称"
            onBlur={handleNicknameChange}
          />
          <span className="iconfont ic-account">&#xe81f;</span>
        </Nickname>
        <MobilePhone className="text-input">
          <input 
            type="text"
            name="phone" 
            placeholder="手机号"
            onBlur={handlePhoneChange}
          />
          <span className="iconfont ic-password">&#xe60d;</span>
        </MobilePhone>
        <Verification className="text-input">
          <input 
            type="text"
            name="verification" 
            placeholder="手机验证码"
            onBlur={handleVerificationChange}
          />
          <span className="iconfont ic-password">&#xe743;</span>
          <button>发送验证码</button>
        </Verification>
        <UserPassword className="text-input">
          <input 
            type="password"
            name="password" 
            placeholder="设置密码"
            onBlur={handlePasswordChange}
          />
          <span className="iconfont ic-password">&#xe619;</span>
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
  nickname: state.getIn(['loginReducer', 'nickname']),
  phone: state.getIn(['loginReducer', 'phone']),
  verification: state.getIn(['loginReducer', 'verification']),
  password: state.getIn(['loginReducer', 'password'])
});

const mapDispatchToProps = (dispatch) => ({
  handleRegister(nickname, phone, verification, password) {

  },
  handleNicknameChange(e) {
    dispatch(actionCreators.changeNickname(e.target.value));
  },
  handlePhoneChange(e) {
    dispatch(actionCreators.changePhone(e.target.value));
  },
  handleVerificationChange(e) {
    dispatch(actionCreators.changeVerification(e.target.value));
  },
  handlePasswordChange(e) {
    dispatch(actionCreators.changePassword(e.target.value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ReBox);