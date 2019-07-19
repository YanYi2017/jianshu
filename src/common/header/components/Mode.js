import React from 'react';

import { SwitchButton } from '../common';

import { StyledMode } from './style';

function Mode() {
  return (
    <StyledMode>
      <button>
        <span className="iconfont">&#xe698;</span>
      </button>
      <ul>
        <li>
          <div>
            <span className="iconfont">&#xe621;</span>
            <span>夜间模式</span>
          </div>
          <SwitchButton leftText="开" rightText="关" />
        </li>
        <li>
          <SwitchButton leftText="宋体" rightText="黑体" />
          <SwitchButton leftText="简体" rightText="繁体" />
        </li>
      </ul>
    </StyledMode>
  );
}

export default Mode;