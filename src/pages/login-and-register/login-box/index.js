import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';

import Others from './components/Others';

import UserAccountInput from './containers/UserAccountInput';
import UserPasswordInput from './containers/UserPasswordInput';
import SubmitButton from './containers/SubmitButton';

import {
  StyledLoginBox,
  MoreSignWrapper, MoreSignWay
} from './style';

class LoginBox extends PureComponent {
  render() {
    const { account, password, handleLogin } = this.props;

    return (
      <StyledLoginBox>
        <UserAccountInput />
        <UserPasswordInput />
        <Others />
        <SubmitButton />
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
      </StyledLoginBox>
    );
  }
}

export default connect()(LoginBox);