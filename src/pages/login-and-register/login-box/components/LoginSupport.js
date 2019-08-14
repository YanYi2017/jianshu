import React from 'react';

import {SupportList ,SupportButton} from '../containers';

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