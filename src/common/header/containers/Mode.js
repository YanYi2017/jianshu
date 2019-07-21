import React from 'react';
import { connect } from 'react-redux';

import { Button, SwitchButton } from '../common';
import { actionCreators } from '../store';
import * as constants from '../../constants';
import { StyledMode } from './style';

function Mode({ nightMode, fontFamily, fontType, changeNightMode, changeFontFamily, changeFontType}) {
  const { ON, OFF, SIM_SUN, SIM_HEI, SIMPLIFIED, TRADITIONAL } = constants;
  
  return (
    <StyledMode>
      <button>
        <span className="iconfont">&#xe698;</span>
      </button>
      <ul>
        <li>
          <div>
            <span className="iconfont">&#xe621;</span>
            <span>夜间模式</span>
          </div>
          <SwitchButton value={nightMode}>
            <Button value={ON} onClick={() => changeNightMode(ON)}>开</Button>
            <Button value={OFF} onClick={() => changeNightMode(OFF)}>关</Button>
          </SwitchButton>
        </li>
        <li>
          <SwitchButton value={fontFamily}>
            <Button value={SIM_SUN} onClick={() => changeFontFamily(SIM_SUN)}>宋体</Button>
            <Button value={SIM_HEI} onClick={() => changeFontFamily(SIM_HEI)}>黑体</Button>
          </SwitchButton>
          <SwitchButton value={fontType}>
            <Button value={SIMPLIFIED} onClick={() => changeFontType(SIMPLIFIED)}>简</Button>
            <Button value={TRADITIONAL} onClick={() => changeFontType(TRADITIONAL)}>繁</Button>
          </SwitchButton>
        </li>
      </ul>
    </StyledMode>
  );
}

const mapStateToProps = state => ({
  nightMode: state.getIn(['headerReducer', 'nightMode']),
  fontFamily: state.getIn(['headerReducer', 'fontFamily']),
  fontType: state.getIn(['headerReducer', 'fontType'])
});

const mapDispatchToProps = dispatch => ({
  changeNightMode(value) {
    dispatch(actionCreators.changeNightMode(value));
  },
  changeFontFamily(value) {
    dispatch(actionCreators.changeFontFamily(value));
  },
  changeFontType(value) {
    dispatch(actionCreators.changeFontType(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Mode);