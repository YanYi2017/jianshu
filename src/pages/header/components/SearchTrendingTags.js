import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { StyledTrendingTags } from './style';

function SearchTrendingTags({ list, page }) {
    const newList = list.toJS();
    const pageList = [];
    for (let i = (page - 1) * 10; i < page * 10; i++) {
      if (newList[i]) {
        pageList.push(
          <li key={newList[i]}>
            <Link to={encodeURI(`/search?q=${newList[i]}`)}>
              {newList[i]}
            </Link>
          </li>
        );
      }
    }
  return (
    <StyledTrendingTags>
      {pageList}
    </StyledTrendingTags>
  );
}

SearchTrendingTags.propTypes = {
  list: PropTypes.object.isRequired,
  page: PropTypes.number.isRequired
};

export default SearchTrendingTags;