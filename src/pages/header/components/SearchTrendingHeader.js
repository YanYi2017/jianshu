import React from 'react';
import PropTypes from 'prop-types';
import { StyledTrendingHeader } from './style';
import { SpinButton } from '../../../common/components';

function SearchTrendingHeader({ onClick }) {
  return (
    <StyledTrendingHeader>
      <span>热门搜索</span>
      <SpinButton onClick={onClick} />
    </StyledTrendingHeader>
  );
}

SearchTrendingHeader.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default SearchTrendingHeader;