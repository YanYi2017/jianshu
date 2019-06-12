import React, { PureComponent } from 'react';
import { Link, Redirect } from 'react-router-dom';

import { actionCreators } from './store';

import { connect } from 'react-redux';

import {
  LoginWrapper,
  Logo,
  LoginBox,
  Title,
  LoginInput, UserName, UserPassword, SubmitButton, Others, SupportButton,
  MoreSignWrapper, MoreSignWay
} from './style';

class Login extends PureComponent {
  render() {
    const { loginStatus, account, password, handleLogin, handleAccountChange, handlePasswordChange } = this.props;
    if (!loginStatus) {
      return (
        <LoginWrapper>
          <Logo>
            <Link to="/">
              <img src="//cdn2.jianshu.io/assets/web/logo-58fd04f6f0de908401aa561cda6a0688.png" alt="logo"/>
            </Link>
          </Logo>
          <LoginBox>
            <Title>
              <Link to="/login" className="active">登录</Link>
              <span>·</span>
              <Link to="regist">注册</Link>
            </Title>
            <LoginInput>
              <UserName className="text-input">
                <input 
                  type="text"
                  name="account"
                  placeholder="手机号或邮箱"
                  onBlur={handleAccountChange}
                />
                <span className="iconfont ic-account">&#xe81f;</span>
              </UserName>
              <UserPassword className="text-input">
                <input 
                  type="password"
                  name="password" 
                  placeholder="密码"
                  onBlur={handlePasswordChange}
                />
                <span className="iconfont ic-password">&#xe619;</span>
              </UserPassword>
              <Others>
                <label>
                  <input type="checkbox" name="remember_me" />
                  <span>记住我</span>
                </label>
                <SupportButton type="button">登录遇到问题？</SupportButton>
              </Others>
              <SubmitButton type="button" onClick={() => handleLogin(account, password)}>登录</SubmitButton>
              <MoreSignWrapper>
                <h6>社交账号登录</h6>
                <MoreSignWay>
                  <li>
                    <a href='https://www.weibo.com/' target="_blank" rel="noopener noreferrer">
                      <span className="iconfont ic-weibo">&#xe602;</span>
                    </a>
                  </li>
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
                  <li>
                    <a href='https://www.weibo.com/' target="_blank" rel="noopener noreferrer">
                      <span className="iconfont ic-douban">&#xe6ff;</span>
                    </a>
                  </li>
                </MoreSignWay>
              </MoreSignWrapper>
            </LoginInput>
          </LoginBox>
        </LoginWrapper>
      );
    } else {
      return <Redirect to="/" />
    }
  }
}

const mapStateToProps = (state) => ({
  loginStatus: state.getIn(['loginReducer', 'loginStatus']),
  account: state.getIn(['loginReducer', 'account']),
  password: state.getIn(['loginReducer', 'password']),
});

const mapDispatchToProps = (dispatch) => ({
  handleLogin(account, password) {
    if (account && password) {
      dispatch(actionCreators.login(account, password));
    } else {
      alert('手机号码/邮箱地址或密码不能为空');
    }
  },
  handleAccountChange(e) {
    dispatch(actionCreators.changeAccount(e.target.value));
  },
  handlePasswordChange(e) {
    dispatch(actionCreators.changePassword(e.target.value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);