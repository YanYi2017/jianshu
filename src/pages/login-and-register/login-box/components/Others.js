import React from 'react';

import { StyledOthers, SupportButton } from '../style';

function Others() {
  return (
    <StyledOthers>
      <label>
        <input type="checkbox" name="remember_me" />
        <span>记住我</span>
      </label>
      <SupportButton type="button">登录遇到问题？</SupportButton>
    </StyledOthers>
  );
}

export default Others;