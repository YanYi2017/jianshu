import React from 'react';

import { MoreRegWayWrapper, StyledMoreRegWay } from '../style';

function MoreRegisterWay() {
  return (
    <MoreRegWayWrapper>
      <h6>社交账号直接注册</h6>
      <StyledMoreRegWay>
        <li>
          <a href='https://www.weibo.com/' target="_blank" rel="noopener noreferrer">
            <span className="iconfont ic-wechat">&#xe694;</span>
          </a>
        </li>
        <li>
          <a href='https://www.weibo.com/' target="_blank" rel="noopener noreferrer">
            <span className="iconfont ic-qq">&#xe608;</span>
          </a>
        </li>
      </StyledMoreRegWay>
    </MoreRegWayWrapper>
  );
}

export default MoreRegisterWay;