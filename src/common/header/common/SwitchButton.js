import React from 'react';
import PropTypes from 'prop-types';

import { StyledSwitchButton } from './style';

function SwitchButton({ leftText, rightText }) {
  return (
    <StyledSwitchButton>
      <button>{leftText}</button>
      <button>{rightText}</button>
    </StyledSwitchButton>
  );
}

SwitchButton.propTypes = {
  leftText: PropTypes.string.isRequired,
  rightText: PropTypes.string.isRequired
};

export default SwitchButton;