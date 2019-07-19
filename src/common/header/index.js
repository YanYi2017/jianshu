import React from 'react';

import { Left, Right } from './components';
import { Middle } from './containers';

import { HeaderWrapper, WidthLimit } from './style';

function Header() {
  return (
    <HeaderWrapper>
      <WidthLimit>
        <Left />
        <Right />
        <Middle />
      </WidthLimit>
    </HeaderWrapper>
  );
}

export default Header;