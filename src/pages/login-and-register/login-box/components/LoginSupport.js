import React from 'react';

import SupportList from '../containers/SupportList';
import SupportButton from '../containers/SupportButton';

import { StyledLoginSupport } from './style';

function LoginSupport() {
  return (
    <StyledLoginSupport>
      <SupportButton />
      <SupportList />
    </StyledLoginSupport>
  );
}

export default LoginSupport;