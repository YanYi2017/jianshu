import React from 'react';
import { connect } from 'react-redux';

import { actionCreators } from '../store';
import Input from '../components/Input';
import Icon from '../components/Icon';

function UserPasswordInput({ handlePasswordChange }) {
  return (
    <div>
      <Icon type="password" />
      <Input
        type="password"
        name="password"
        placeholder="密码"
        position="bottom"
        onBlur={handlePasswordChange}
      />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  handlePasswordChange(e) {
    dispatch(actionCreators.changePassword(e.target.value));
  }
});

export default connect(null, mapDispatchToProps)(UserPasswordInput);