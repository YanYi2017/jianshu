import React from 'react';
import { connect } from 'react-redux';

import diamondPic from '../../../statics/img/diamond.png';
import jianshuappPic from '../../../statics/img/jianshuapp.png';
import { StyledDiamond, StyledDialog } from './style';
import { actionCreators } from '../store';

function Diamond({ appAdIsShowed, handleClick }) {
  return (
    <StyledDiamond>
      <button onClick={handleClick}>
        <img src={diamondPic} alt="diamond" />
      </button>
      {
        appAdIsShowed &&
        <StyledDialog>
          <div>
            <h4>简书钻相关功能，目前仅能在<span>简书App</span>查看</h4>
            <div>
              <img src={jianshuappPic} alt="简书App"/>
              <p>扫码下载 简书App</p>
            </div>
            <div>
              <button onClick={handleClick}>我知道了</button>
            </div>
          </div>
        </StyledDialog>
      }
    </StyledDiamond>
  );
}

const mapStateToProps = state => ({
  appAdIsShowed: state.getIn(['headerReducer', 'appAdIsShowed'])
});

const mapDispatchToProps = dispatch => ({
  handleClick() {
    dispatch(actionCreators.toggleAppAd());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Diamond);