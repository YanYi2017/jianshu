import React from 'react';
import {connect} from 'react-redux';

import { actionCreators } from '../store';
import ModeList from './ModeList';
import { StyledMode } from './style';

function Mode({ modeListIsShowed, handleClick }) {
  return (
    <StyledMode>
      <button onClick={handleClick}>
        <span className="iconfont">&#xe698;</span>
      </button>
      { modeListIsShowed && <ModeList /> }
    </StyledMode>
  );
}

const mapDispatchToProps = dispatch => ({
  handleClick() {
    dispatch(actionCreators.toggleModeList(true));
  }
});

const mapStatToProps = state => ({
  modeListIsShowed: state.getIn(['headerReducer', 'modeListIsShowed'])
});

export default connect(mapStatToProps, mapDispatchToProps)(Mode);