import React from 'react';
import diamondPic from '../../../statics/diamond.png';

import { StyledRight, StyledWriter, StyledRegister, StyledLogin, StyledLink, StyledDiamond, StyledMode, StyledButton } from './style';

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
      <StyledDiamond>
        <StyledButton>
          <img src={diamondPic} alt="diamond"/>
        </StyledButton>
      </StyledDiamond>
      <StyledMode>
        <StyledButton>
          <span className="iconfont">&#xe698;</span>
        </StyledButton>
      </StyledMode>
    </StyledRight>
  );
}

export default Right;