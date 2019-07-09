import React from 'react';
import PropTypes from 'prop-types';

import { StyledIcon } from '../style';

function Icon({ type }) {
  switch (type) {
    case 'user':
      return <StyledIcon className="iconfont ic-account">&#xe81f;</StyledIcon>;
    case 'password':
      return <StyledIcon className="iconfont ic-password">&#xe619;</StyledIcon>;
    default:
      return <StyledIcon>default</StyledIcon>
  }
}

Icon.propTypes = {
  type: PropTypes.oneOf(['user', 'password']).isRequired
};

export default Icon;