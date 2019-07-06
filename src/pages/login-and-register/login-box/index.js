import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';

import Others from './components/Others';

import UserAccountInput from './containers/UserAccountInput';
import UserPasswordInput from './containers/UserPasswordInput';

import {
  StyledLoginBox, SubmitButton, SupportButton,
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
      </StyledLoginBox>
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
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginBox);