import React from 'react';
import { Link } from 'react-router-dom';

import { StyledRegisterMsg } from './style';

function RegisterMsg() {
  return (
    <StyledRegisterMsg>
      <p>点击 “注册” 即表示您同意并愿意遵守简书</p>
      <p>
        <Link>用户协议</Link>和<Link>隐私政策</Link>
      </p>
    </StyledRegisterMsg>
  );
}

export default RegisterMsg;