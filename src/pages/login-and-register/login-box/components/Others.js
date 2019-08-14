import React from 'react';

import LoginSupport from './LoginSupport';

import { StyledOthers } from './style';

function Others() {
  return (
    <StyledOthers>
      <label>
        <input type="checkbox" name="remember_me" />
        <span>记住我</span>
      </label>
      <LoginSupport />
    </StyledOthers>
  );
}

export default Others;