import React from 'react';
import PropTypes from 'prop-types';
import { StyledAddMore } from './style';

function AddMore({ getMoreList }) {
  return (
    <StyledAddMore onClick={getMoreList}>阅读更多</StyledAddMore>
  );
}

AddMore.propTypes = {
  getMoreList: PropTypes.func.isRequired
};

export default AddMore;