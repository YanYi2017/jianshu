import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';

import Others from './components/Others';
import MoreSignWay from './components/MoreSignWay';

import UserAccountInput from './containers/UserAccountInput';
import UserPasswordInput from './containers/UserPasswordInput';
import SubmitButton from './containers/SubmitButton';

import {
  StyledLoginBox
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
        <MoreSignWay />
      </StyledLoginBox>
    );
  }
}

export default connect()(LoginBox);