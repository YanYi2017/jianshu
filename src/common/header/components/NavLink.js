import React from 'react';
import PropTypes from 'prop-types';
import { StyledMiddleLink } from './style';

function NavLink({ to, iconCode, text  }) {
  return (
    <StyledMiddleLink to={to} className="dib_vm">
      <span className="iconfont vm">{iconCode}</span>
      <span className="menu-text vm">{text}</span>
    </StyledMiddleLink>
  );
}

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  iconCode: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default NavLink;