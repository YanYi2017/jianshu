import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { StyledMiddleLink } from './style';

function NavLink({ match, to, iconCode, text  }) {
  const currentURL = match.url;
  return (
    <StyledMiddleLink to={to} className={currentURL === to ? 'dib_vm active' : 'dib_vm'}>
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

export default withRouter(NavLink);