import React from 'react';
import PropTypes from 'prop-types';

import { StyledSwitchButton } from './style';


function SwitchButton({ value, children }) {
  const childrenExtendsProps = React.Children.map(
    children, child => React.cloneElement(child, {parentValue: value})
  );

  return (
    <StyledSwitchButton>
      {childrenExtendsProps}
    </StyledSwitchButton>
  );
}

SwitchButton.propTypes = {
  value: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.node).isRequired
};

export default SwitchButton;