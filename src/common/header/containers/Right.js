import React from 'react';

import { Mode } from './';
import { Diamond } from '../components';
import { StyledRight, StyledWriter, StyledRegister, StyledLogin, StyledLink } from '../components/style';


function Right() {
  return (
    <StyledRight>
      <StyledWriter>
        <StyledLink to="#">
          <span className="iconfont">&#xe616;</span>
          <span>写文章</span>
        </StyledLink>
      </StyledWriter>
      <StyledRegister>
        <StyledLink to="/register">注册</StyledLink>
      </StyledRegister>
      <StyledLogin>
        <StyledLink to='/login'>登录</StyledLink>
      </StyledLogin>
      <Diamond />
      <Mode />
    </StyledRight>
  );
}

export default Right;