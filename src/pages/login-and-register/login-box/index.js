import React, { Fragment } from 'react';

import Others from './components/Others';
import MoreSignWay from './components/MoreSignWay';

import UserAccountInput from './containers/UserAccountInput';
import UserPasswordInput from './containers/UserPasswordInput';
import SubmitButton from './containers/SubmitButton';
import ErrorTip from './containers/ErrorTip';

function LoginBox() {
  return (
    <Fragment>
      <form>
        <ErrorTip />
        <UserAccountInput />
        <UserPasswordInput />
        <Others />
        <SubmitButton />
      </form>
      <MoreSignWay />
    </Fragment>
  );
}

export default LoginBox;