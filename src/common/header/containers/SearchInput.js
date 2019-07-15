import React, { Fragment } from 'react';

import { StyledSearchInput, StyledInput, StyledIcon } from './style';

function SearchInput() {
  return (
    <StyledSearchInput className="dib_vm">
      <StyledInput className="vm" placeholder="搜索" />
      <StyledIcon className='iconfont vm'>&#xe653;</StyledIcon>
    </StyledSearchInput>
  );
}

export default SearchInput;