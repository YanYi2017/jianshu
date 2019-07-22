import React from 'react';
import { connect } from 'react-redux';

import { actionCreators } from '../store';
import { MenuButton, NavList } from '../components';
import { StyledMiddle } from './style';

function Middle({ navListIsShowed, handleClick }) {
  return (
    <StyledMiddle className="dib_vm">
      <MenuButton onClick={handleClick} />
      <NavList isShowed={navListIsShowed} />
    </StyledMiddle>
  );
}

const mapStateToProps = (state) => ({
  navListIsShowed: state.getIn(['headerReducer', 'navListIsShowed'])
});
const mapDispatchToProps = (dispatch) => ({
  handleClick() {
    dispatch(actionCreators.toggleNavList());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Middle);