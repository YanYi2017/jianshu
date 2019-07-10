import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { actionCreators } from '../store';
import { Input, Icon } from '../../common';
import { SideErrorTip } from '../components';


class NicknameInput extends PureComponent {
  render() {
    const { nickname, handleChange, handleFocus, handleBlur } = this.props;
    return (
      <div>
        <Icon type="user" />
        <Input
          type="text"
          name="nickname"
          value={nickname.get('value')}
          placeholder="你的昵称"
          position="top"
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        { // 当昵称输入框失焦且有需要提示的信息时，显示侧边提示框
          !nickname.get('isFocused')
            && nickname.getIn(['validateResult', 'msg']) 
            && <SideErrorTip errMsg={nickname.getIn(['validateResult', 'msg'])} />
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  nickname: state.getIn(['registerReducer', 'nickname'])
});

const mapDispatchToProps = (dispatch) => ({
  handleChange(e) {
    dispatch(actionCreators.changeNicknameValue(e.target.value));
  },
  handleFocus(e) {
    dispatch(actionCreators.toggleNicknameFocus(true));
  },
  handleBlur(e) {
    dispatch(actionCreators.testNickname(e.target.value));
    dispatch(actionCreators.toggleNicknameFocus(false));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NicknameInput);