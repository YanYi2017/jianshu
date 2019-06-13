import React, { PureComponent } from 'react';
import { Link, Redirect, Route } from 'react-router-dom';
import { actionCreators } from './store';
import { connect } from 'react-redux';

import { LoginBox, RegisterBox } from './components';

import {
  OuterWrapper,
  Logo,
  InnerBox,
  Title,
} from './style';

class LoginAndRegister extends PureComponent {
  render() {
    const { loginStatus, match } = this.props;
    if (!loginStatus) {
      return (
        <OuterWrapper>
          <Logo>
            <Link to="/">
              <img src="//cdn2.jianshu.io/assets/web/logo-58fd04f6f0de908401aa561cda6a0688.png" alt="logo"/>
            </Link>
          </Logo>
          <InnerBox>
            <Title>
              <Link to="/login" className={match.url === '/login' ? 'active' : ''}>登录</Link>
              <span>·</span>
              <Link to="/register" className={match.url === '/register' ? 'active' : ''}>注册</Link>
            </Title>

            <Route path='/login' component={LoginBox} />
            <Route path='/register' component={RegisterBox} />
          </InnerBox>
        </OuterWrapper>
      );
    } else {
      return <Redirect to="/" />
    }
  }
}

const mapStateToProps = (state) => ({
  loginStatus: state.getIn(['loginReducer', 'loginStatus'])
});

export default connect(mapStateToProps, null)(LoginAndRegister);