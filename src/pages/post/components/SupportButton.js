import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.button`
  padding: 8px 25px;
  margin-bottom: 20px;
  border-radius: 20px;
  color: #fff;
  background: #ea6f5a;
  line-height: 1.42857;
  font-size: 16px;
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