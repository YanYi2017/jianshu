import React from 'react';
import PropTypes from 'prop-types';

import { StyledInput } from '../style';

function Input({ type, name, value, placeholder, position, onChange }) {
  return (
    <StyledInput
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      position={position}
      onChange={onChange}
    />
  );
}

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  position: PropTypes.string,
  onChange: PropTypes.func.isRequired
}

export default Input;