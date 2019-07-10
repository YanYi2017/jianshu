import React, { Fragment } from 'react';

import {Others, MoreSignWay} from './components';
import {UserAccountInput, UserPasswordInput,SubmitButton,ErrorTip} from './containers';

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