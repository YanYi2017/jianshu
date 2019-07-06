import React from 'react';
import { connect } from 'react-redux';

import { actionCreators } from '../store';
import Input from '../components/Input';
import Icon from '../components/Icon';

function UserPasswordInput({ value, handlePasswordChange }) {
  return (
    <div>
      <Icon type="password" />
      <Input
        type="password"
        name="password"
        value={value}
        placeholder="密码"
        position="bottom"
        onChange={handlePasswordChange}
      />
    </div>
  );
}

const mapStateToProps = (state) => ({
  value: state.getIn(['loginReducer', 'password'])
});

const mapDispatchToProps = (dispatch) => ({
  handlePasswordChange(e) {
    dispatch(actionCreators.changePassword(e.target.value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(UserPasswordInput);