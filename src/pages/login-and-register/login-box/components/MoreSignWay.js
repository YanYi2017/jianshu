import React from 'react';

import { StyledMoreSignWay, SignWays } from './style';

function MoreSignWay() {
  return (
    <StyledMoreSignWay>
      <h6>社交账号登录</h6>
      <SignWays>
        <li>
          <a href='https://www.weibo.com/' target="_blank" rel="noopener noreferrer">
            <span className="iconfont ic-weibo">&#xe602;</span>
          </a>
        </li>
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
        <li>
          <a href='https://www.weibo.com/' target="_blank" rel="noopener noreferrer">
            <span className="iconfont ic-douban">&#xe6ff;</span>
          </a>
        </li>
      </SignWays>
    </StyledMoreSignWay>
  );
}

export default MoreSignWay;