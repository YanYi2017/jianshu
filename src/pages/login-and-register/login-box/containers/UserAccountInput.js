import React from 'react';
import { connect } from 'react-redux';

import { actionCreators } from '../store';
import Input from '../components/Input';
import Icon from '../components/Icon';

function UserAccountInput({ handleAccountChange }) {
  return (
    <div>
      <Icon type="user" />
      <Input
        type="text"
        name="account"
        placeholder="手机号或邮箱"
        position="top"
        onBlur={handleAccountChange}
      />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  handleAccountChange(e) {
    console.log('blur');
    dispatch(actionCreators.changeAccount(e.target.value));
  }
});

export default connect(null, mapDispatchToProps)(UserAccountInput);