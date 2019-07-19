import React from 'react';
import PropTypes from 'prop-types';
import { StyledTrendingHeader } from './style';

function SearchTrendingHeader({ onClick }) {
  const spin = React.createRef();
  return (
    <StyledTrendingHeader>
      <span>热门搜索</span>
      <button
        onClick={() => onClick(spin)}
      >
        <span
          ref={spin}
          className='iconfont ic-search-change'
          style={{ transform: 'rotate(90deg)' }}
        >
          &#xe61b;
        </span>
        <span>换一批</span>
      </button>
    </StyledTrendingHeader>
  );
}

SearchTrendingHeader.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default SearchTrendingHeader;