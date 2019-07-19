import React from 'react';

import diamondPic from '../../../statics/diamond.png';
import Mode from './Mode';
import { StyledRight, StyledWriter, StyledRegister, StyledLogin, StyledLink, StyledDiamond } from './style';


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
        <button>
          <img src={diamondPic} alt="diamond"/>
        </button>
      </StyledDiamond>
      <Mode />
    </StyledRight>
  );
}

export default Right;