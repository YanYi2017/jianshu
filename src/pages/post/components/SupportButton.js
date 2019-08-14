import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from './Button';

const Wrapper = styled(Button)`
  width: 115px;
  margin-bottom: 20px;
  background: #ea6f5a;
  :hover {
    background: #ec6149;
  }
`;

function SupportButton({ showModal }) {
  return (
    <Wrapper onClick={showModal}>
      赞赏支持
    </Wrapper>
  );
}

SupportButton.propTypes = {
  showModal: PropTypes.func.isRequired
};

export default SupportButton;