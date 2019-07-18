import React from 'react';
import { connect } from 'react-redux';

import { actionCreators } from '../store';
import { MenuButton, NavList } from '../components';
import { StyledMiddle } from './style';

function Middle({ isShowed, handleClick }) {
  return (
    <StyledMiddle className="dib_vm">
      <MenuButton onClick={handleClick} />
      <NavList isShowed={isShowed} />
    </StyledMiddle>
  );
}

const mapStateToProps = (state) => ({
  isShowed: state.getIn(['headerReducer', 'isShowed'])
});
const mapDispatchToProps = (dispatch) => ({
  handleClick() {
    dispatch(actionCreators.toggleList());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Middle);