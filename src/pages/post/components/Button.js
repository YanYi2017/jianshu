import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.button`
  width: 80px;
  height: 40px;
  border-radius: 20px;
  border: none;
  font-size: 16px;
  color: #fff;
  background: #42c02e;
  :hover {
    background: #3db922;
  }
`;

function Button({ children, type, className, onClick }) {
  return (
    <Wrapper
      type={type}
      className={className}
      onClick={onClick}
    >
      {children}
    </Wrapper>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

export default Button;