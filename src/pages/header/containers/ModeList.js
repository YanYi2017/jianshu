import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import * as constants from '../../../common/constants';
import { Button, SwitchButton } from '../common';
import { actionCreators } from '../store';
import { StyledModeList } from './style';

class ModeList extends PureComponent {
  constructor(props) {
    super(props);
    this.modeListRef = React.createRef();
  }
  componentDidMount() {
    document.addEventListener('mousedown', e => this.props.hideModeList(e, this.modeListRef.current));
  }
  componentWillUnmount() {
    document.removeEventListener('mousedown', e => this.props.hideModeList(e, this.modeListRef.current));
  }
  render() {
    const { nightMode, fontFamily, fontType, changeNightMode, changeFontFamily, changeFontType } = this.props;
    const { ON, OFF, SIM_SUN, SIM_HEI, SIMPLIFIED, TRADITIONAL } = constants;

    return (
      <StyledModeList ref={this.modeListRef}>
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
      </StyledModeList>
    );
  }
}

const mapStateToProps = state => ({
  nightMode: state.getIn(['headerReducer', 'nightMode']),
  fontFamily: state.getIn(['headerReducer', 'fontFamily']),
  fontType: state.getIn(['headerReducer', 'fontType'])
});

const mapDispatchToProps = dispatch => ({
  hideModeList(e, node) {
    if (node && !node.contains(e.target)) {
      dispatch(actionCreators.toggleModeList(false));
    }
  },
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

export default connect(mapStateToProps, mapDispatchToProps)(ModeList);