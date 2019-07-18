import React from 'react';
import PropTypes from 'prop-types';
import { StyledMenuButton } from './style';

function MenuButton({ onClick }) {
  return (
    <StyledMenuButton
      className="vm"
      onClick={onClick}
    >
      <span className="iconfont">&#xe604;</span>
    </StyledMenuButton>
  );
}

MenuButton.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default MenuButton;