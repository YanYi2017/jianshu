import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { actionCreators } from '../store';
import { Input, Icon } from '../../common';
import { SideErrorTip } from '../components';

function PasswordInput({ password, handlePasswordChange, handlePasswordFocus, handlePasswordBlur }) {
  return (
    <div>
      <Icon type="password" />
      <Input
        type="password"
        name="password"
        value={password.get('value')}
        placeholder="设置密码"
        position="bottom"
        onChange={handlePasswordChange}
        onFocus={handlePasswordFocus}
        onBlur={handlePasswordBlur}
      />
      {
        (!password.get('isFocused')
          && password.getIn(['validateResult', 'msg']))
          && <SideErrorTip errMsg={password.getIn(['validateResult', 'msg'])} />
      }
    </div>
  );
}

const mapStateToProps = (state) => ({
  password: state.getIn(['registerReducer', 'password'])
});
const mapDispatchToProps = (dispatch) => ({
  handlePasswordChange(e) {
    dispatch(actionCreators.changePasswordValue(e.target.value));
  },
  handlePasswordFocus(e) {
    dispatch(actionCreators.togglePasswordFocus(true));
  },
  handlePasswordBlur(e) {
    dispatch(actionCreators.changePasswordValidateResult(e.target.value));
    dispatch(actionCreators.togglePasswordFocus(false));
  }
});

PasswordInput.propTypes = {
  password: PropTypes.object.isRequired,
  handlePasswordChange: PropTypes.func.isRequired,
  handlePasswordFocus: PropTypes.func.isRequired,
  handlePasswordBlur: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(PasswordInput);