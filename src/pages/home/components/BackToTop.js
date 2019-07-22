import React from 'react';
import PropTypes from 'prop-types';
import { StyledBackToTop } from './style';

function BackToTop({ onClick }) {
  return (
    <StyledBackToTop onClick={onClick}>
      <span className="iconfont">&#xe671;</span>
    </StyledBackToTop>
  );
}

BackToTop.propTypes = {
  onClick: PropTypes.func.isRequired
};
export default BackToTop;