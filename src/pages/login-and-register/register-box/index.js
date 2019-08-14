import React from 'react';

import { RegisterMsg, MoreRegisterWay } from './components';
import { ErrorTip, NicknameInput, MobilePhoneInput, VerificationInput, PasswordInput, SubmitButton } from './containers';

function RegisterBox() {
  return (
    <div>
      <ErrorTip />
      <NicknameInput />
      <MobilePhoneInput />
      <VerificationInput />
      <PasswordInput />
      <SubmitButton />
      <RegisterMsg />
      <MoreRegisterWay />
    </div>
  );
}

export default RegisterBox;