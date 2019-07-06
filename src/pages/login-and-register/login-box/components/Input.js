import React from 'react';
import PropTypes from 'prop-types';

import {StyledInput} from '../style';

function Input({ type, name, placeholder, position, onBlur }) {
  return (
    <StyledInput
      type={type}
      name={name}
      placeholder={placeholder}
      position={position}
      onBlur={onBlur}
    />
  );
}

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  position: PropTypes.string,
  onBlur: PropTypes.func.isRequired
}

export default Input;