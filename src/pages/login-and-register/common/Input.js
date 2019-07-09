import React from 'react';
import PropTypes from 'prop-types';

import { StyledInput } from '../style';

function Input({ type, name, value, placeholder, position, onChange, onBlur }) {
  return (
    <StyledInput
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      position={position}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
}

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  position: PropTypes.oneOf(['top', 'middle', 'bottom']).isRequired,
  onChange: PropTypes.func,
  onChange: PropTypes.func
}

export default Input;