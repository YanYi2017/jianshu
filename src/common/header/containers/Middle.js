import React from 'react';
import SearchInput from './SearchInput';

import { StyledMiddle, StyledHomepage, StyledDownload } from './style.js';

function Middle() {
  return (
    <StyledMiddle>
      <ul>
        <li>
          <StyledHomepage to="/" className="dib_vm">
            <span className="iconfont vm">&#xe632;</span>
            <span className="menu-text vm">首页</span>
          </StyledHomepage>
        </li>
        <li>
          <StyledDownload className="dib_vm">
            <span className="iconfont vm">&#xe643;</span>
            <span className="menu-text vm">下载App</span>
          </StyledDownload>
        </li>
        <li>
          <SearchInput />
        </li>
      </ul>

    </StyledMiddle>
  );
}

export default Middle;