import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';

import {
  LoginInput, UserName, UserPassword, SubmitButton, Others, SupportButton,
  MoreSignWrapper, MoreSignWay
} from './style';

class LoginBox extends PureComponent {
  render() {
    const { account, password, handleLogin, handleAccountChange, handlePasswordChange } = this.props;

    return (
      <LoginInput>
        <UserName className="text-input">
          <span className="iconfont ic-account">&#xe81f;</span>
          <input 
            type="text"
            name="account"
            placeholder="手机号或邮箱"
            onBlur={handleAccountChange}
          />
        </UserName>
        <UserPassword className="text-input">
          <span className="iconfont ic-password">&#xe619;</span>
          <input 
            type="password"
            name="password" 
            placeholder="密码"
            onBlur={handlePasswordChange}
          />
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
    );
  }
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
  },
  handleAccountChange(e) {
    dispatch(actionCreators.changeAccount(e.target.value));
  },
  handlePasswordChange(e) {
    dispatch(actionCreators.changePassword(e.target.value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginBox);