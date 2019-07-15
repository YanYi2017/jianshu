import React from 'react';
import SearchInput from './SearchInput';

import { StyledMiddle, StyledHomepage, StyledDownload } from './style.js';

function Middle() {
  return (
    <StyledMiddle>
      <StyledHomepage to="/">
        <span className="iconfont">&#xe632;</span>
        <span>首页</span>
      </StyledHomepage>
      <StyledDownload>
        <span className="iconfont">&#xe643;</span>
        <span>下载App</span>
      </StyledDownload>
      <SearchInput />
    </StyledMiddle>
  );
}

export default Middle;