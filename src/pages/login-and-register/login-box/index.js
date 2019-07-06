import React, { Fragment } from 'react';

import Others from './components/Others';
import MoreSignWay from './components/MoreSignWay';

import UserAccountInput from './containers/UserAccountInput';
import UserPasswordInput from './containers/UserPasswordInput';
import SubmitButton from './containers/SubmitButton';

function LoginBox() {
  return (
    <Fragment>
      <form>
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