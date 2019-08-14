import React from 'react';

import { Left } from './components';
import { Middle, Right } from './containers';

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