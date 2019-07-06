import React from 'react';
import { connect } from 'react-redux';

import { actionCreators } from '../store';
import Input from '../components/Input';
import Icon from '../components/Icon';

function UserAccountInput({ value, handleAccountChange }) {
  return (
    <div>
      <Icon type="user" />
      <Input
        type="text"
        name="account"
        value={value}
        placeholder="手机号或邮箱"
        position="top"
        onChange={handleAccountChange}
      />
    </div>
  );
}

const mapStateToProps = (state) => ({
  value: state.getIn(['loginReducer', 'account'])
});

const mapDispatchToProps = (dispatch) => ({
  handleAccountChange(e) {
    dispatch(actionCreators.changeAccount(e.target.value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(UserAccountInput);