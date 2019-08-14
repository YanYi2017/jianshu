import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BadgeWrapper = styled.span`
  display: inline-block;
  width:20px;
  height:20px;
  vertical-align: middle;
  margin-right: 7px;
  img {
    width: 100%;
    height: 100%;
  }
  .hover-show {
    display: none;
  }
  &:hover .hover-show {
    display: block;
  }
`;

const Tooltip = styled.div`
  position: absolute;
  font-size: 14px;
  padding: 5px 10px;
  margin-top: -65px;
  margin-left: -35px;
  line-height: 1.42857;
`;

const TooltipInner = styled.div`
  padding: 5px 10px;
  color: #fff;
  background: #000;
  border-radius: 4px;
`;

const TooltipArrow = styled.div`
  margin-left: 30px;
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-bottom-width: 0;
  border-top-color: #000;
`;

function Badge({ children, tip }) {
  return (
    <BadgeWrapper>
      {children}
      <Tooltip className="hover-show">
        <TooltipInner>{tip}</TooltipInner>
        <TooltipArrow></TooltipArrow>
      </Tooltip>
    </BadgeWrapper>
  );
}

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  tip: PropTypes.string.isRequired
};

export default Badge;