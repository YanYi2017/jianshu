import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actionCreators } from './store';

import axios from 'axios';

import { NicknameInput, MobilePhoneInput } from './containers';

import {
  StyledSideErrorTip,
  RegisterInput, Nickname, MobilePhone, Verification, UserPassword, SubmitButton, RegisterMsg,
  MoreSignWrapper, MoreSignWay
} from './style';

class ReBox extends PureComponent {
  componentDidMount() {
    // 处理验证码
    const { handleVerificationDisableChange } = this.props;

    window.handleCaptcha = function(res){
        // 若拼图成功
        if(res.ret === 0){
            // 请求服务端处理返回的验证票据
            axios.post('http://127.0.0.1:7300/mock/5d130b34bbc69c047c619b06/jianshu/check_captcha', {
              ticket: res.ticket
            })
              .then((response) => {
                // 若人机验证成功
                if (response.data.success) {
                  console.log('success');
                  // handleVerificationDisableChange(true);
                  // setTimeout(handleVerificationDisableChange(false), 1000);
                }
                // 若人机验证失败
                else {
                  console.log('false');
                }
              });
        }
    }
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

        <Verification>
          <span className="iconfont ic-verification">&#xe743;</span>
          <input 
            type="text"
            name="verification"
            placeholder="手机验证码"
            value={verification.get('value')}
            onChange={handleVerificationValueChange}
          />
          <button 
            className={phone.getIn(['validateResult', 'status']) ? null : 'disable'}
            id="TencentCaptcha"
            data-appid="2083658602"
            data-cbfn="handleCaptcha"
          >
            发送验证码
          </button>
        </Verification>
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
  phone: state.getIn(['registerReducer', 'phone']),
  verification: state.getIn(['registerReducer', 'verification']),
  password: state.getIn(['registerReducer', 'password'])
});

const mapDispatchToProps = (dispatch) => ({
  handleRegister(nickname, phone, verification, password) {

  },

  handleVerificationValueChange(e) {
    dispatch(actionCreators.changeVerificationValue(e.target.value));
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