import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { StyledSupportList } from '../style.js';

function SupportList({ showSupportList }) {
  return (
    <StyledSupportList showSupportList={showSupportList}>
      <li>
        <Link to="/">用手机号重置密码</Link>
      </li>
      <li>
        <Link to="/">用邮箱重置密码</Link>
      </li>
      <li>
        <Link to="/">无法用海外手机号登录</Link>
      </li>
      <li>
        <Link to="/">无法用Google账号登录</Link>
      </li>
    </StyledSupportList>
  );
}

const mapStateToProps = (state) => ({
  showSupportList: state.getIn(['loginReducer', 'showSupportList'])
});

export default connect(mapStateToProps)(SupportList);