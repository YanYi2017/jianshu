import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { actionCreators } from '../store';
import { Input, Icon } from '../../common';
import { SideErrorTip } from '../components';


class NicknameInput extends PureComponent {
  render() {
    const { nickname, handleNicknameChange, handleNicknameBlur } = this.props;
    return (
      <div>
        <Icon type="user" />
        <Input
          type="text"
          name="nickname"
          placeholder="你的昵称"
          position="top"
          value={nickname.get('value')}
          onChange={handleNicknameChange}
          onBlur={handleNicknameBlur}
        />
        {
          nickname.getIn(['validateResult', 'msg']) && (
            <SideErrorTip errMsg={nickname.getIn(['validateResult', 'msg'])} />
          )
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  nickname: state.getIn(['registerReducer', 'nickname'])
});

const mapDispatchToProps = (dispatch) => ({
  handleNicknameChange(e) {
    dispatch(actionCreators.changeNickname(e.target.value));
  },
  handleNicknameBlur(e) {
    dispatch(actionCreators.testNickname(e.target.value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NicknameInput);