import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import {
  LoginWrapper,
  LoginBox,
  Title,
  LoginInput, UserName, UserPassword, SubmitButton, Others, SupportButton,
  MoreSignWrapper, MoreSignWay
} from './style';

class Login extends PureComponent {
  render() {
    return (
      <LoginWrapper>
        <LoginBox>
          <Title>
            <Link to="/login">登录</Link>
            <span>·</span>
            <Link to="regist">注册</Link>
          </Title>
          <LoginInput method="post" action="">
            <UserName className="text-input">
              <input type="text" name="email_or_mobile_number" placeholder="手机号或邮箱" />
              <span className="iconfont ic-user">&#xe81f;</span>
            </UserName>
            <UserPassword className="text-input">
              <input type="password" name="password" placeholder="密码" />
              <span className="iconfont ic-password">&#xe619;</span>
            </UserPassword>
            <Others>
              <label>
                <input type="checkbox" name="remember_me" />
                <span>记住我</span>
              </label>
              <SupportButton>登录遇到问题？</SupportButton>
            </Others>
            <SubmitButton>登录</SubmitButton>
            <MoreSignWrapper>
              <h6>社交账号登录</h6>
              <MoreSignWay>
                <li>
                  <Link to='https://www.weibo.com/'>
                    <span className="iconfont ic-weibo">&#xe602;</span>
                  </Link>
                </li>
                <li>
                  <Link to='https://www.weibo.com/'>
                    <span className="iconfont ic-wechat">&#xe694;</span>
                  </Link>
                </li>
                <li>
                  <Link to='https://www.weibo.com/'>
                    <span className="iconfont ic-qq">&#xe608;</span>
                  </Link>
                </li>
                <li>
                  <Link to='https://www.weibo.com/'>
                    <span className="iconfont ic-douban">&#xe6ff;</span>
                  </Link>
                </li>
              </MoreSignWay>
            </MoreSignWrapper>
          </LoginInput>
        </LoginBox>
      </LoginWrapper>
    );
  }
}

export default Login;