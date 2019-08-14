import React from 'react';
import PropTypes from 'prop-types';

import { StyledSideErrorTip } from './style';

function SideErrorTip({ errMsg }) {
  return (
    <StyledSideErrorTip>
      <div className="errorTip-arrow errorTip-arrow-border"></div>
      <div className="errorTip-arrow errorTip-arrow-bg"></div>
      <div className="errorTip-inner">
        <span className="iconfont ic-error">&#xe63f;</span>
        <span className="err-msg">
          {errMsg}
        </span>
      </div>
    </StyledSideErrorTip>
  );
}

SideErrorTip.propTypes = {
  errMsg: PropTypes.string.isRequired
};

export default SideErrorTip;