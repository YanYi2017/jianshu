import React from 'react';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';

import { StyledNavList } from './style';
import NavLink from './NavLink';
import { SearchInput, SearchTrending } from '../containers';

function NavList({ isShowed }) {
  return (
    <CSSTransition
      in={isShowed}
      timeout={300}
      classNames="showed"
    >
      <StyledNavList>
        <li>
          <NavLink to="/" iconCode="&#xe632;" text="首页" />
        </li>
        <li>
          <NavLink to="#" iconCode="&#xe643;" text="下载App" />
        </li>
        <li>
          <SearchInput />
          <SearchTrending />
        </li>
      </StyledNavList>
    </CSSTransition>
  );
}

NavList.propTypes = {
  isShowed: PropTypes.bool.isRequired
};

export default NavList;