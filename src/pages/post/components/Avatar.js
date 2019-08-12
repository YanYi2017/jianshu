import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import theme from 'styled-theming';
import * as constants from '../../../common/constants';

const { ON, OFF } = constants;

const borderColor = theme('mode', {
  [ON]: '#2f2f2f',
  [OFF]: '#ddd'
});

const Wrapper = styled(Link)`
  display: inline-block;
  width: 48px; height: 48px;
  
  img {
    width: 100%;
    height: 100%;
    border: 1px solid ${borderColor};
    border-radius: 50%;
  }
`;

function Avatar({ href, imgSrc, imgAlt }) {
  return (
    <Wrapper to={href}>
      <img src={imgSrc} alt={imgAlt} />
    </Wrapper>
  );
}

Avatar.propTypes = {
  href: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired
};

export default Avatar;