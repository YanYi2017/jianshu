import React from 'react';
import PropTypes from 'prop-types';

import { StyledButton } from './style';

function Button({ parentValue, value, children, onClick }) {
  return (
    <StyledButton
      className={parentValue === value && 'active'}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  parentValue: PropTypes.string,
  value: PropTypes.string,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Button;