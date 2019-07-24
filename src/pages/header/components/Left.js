import React from 'react';
import logoPic from '../../../statics/img/logo.png';

import { Logo } from './style';

function Left() {
  return (
    <Logo to="/">
      <img src={logoPic} alt="Nav logo" />
    </Logo>
  );
}

export default Left;