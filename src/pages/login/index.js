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
    const { loginStatus } = this.props;
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
                  ref={input => this.accountElem = input}
                  required
                />
                <span className="iconfont ic-account">&#xe81f;</span>
              </UserName>
              <UserPassword className="text-input">
                <input 
                  type="password"
                  name="password" 
                  placeholder="密码" 
                  ref={input => this.passwordElem = input} 
                  required
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
              <SubmitButton type="button" onClick={() => this.props.login(this.accountElem, this.passwordElem)}>登录</SubmitButton>
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
  loginStatus: state.getIn(['loginReducer', 'login'])
});

const mapDispatchToProps = (dispatch) => ({
  login(accountElem, passwordElem) {
    dispatch(actionCreators.login(accountElem.value, passwordElem.value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);