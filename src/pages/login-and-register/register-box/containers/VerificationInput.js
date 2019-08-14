import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { actionCreators } from '../store';
import { Input, Icon } from '../../common';
import { SideErrorTip } from '../components';

import VerificationButton from './VerificationButton';
import { StyledVerificationInput } from './style';

function VerificationInput({ phone, verification, handleChange, handleFocus, handleBlur }) {
  if (phone.get('value')) {
    return (
      <StyledVerificationInput>
        <Icon type="verification" />
        <Input
          type="text"
          name="verification"
          value={verification.get('value')}
          placeholder="手机验证码"
          position="middle"
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <VerificationButton />
        { // 当昵称输入框失焦且有需要提示的信息时，显示侧边提示框
          !verification.get('isFocused')
          && verification.getIn(['validateResult', 'msg'])
          && <SideErrorTip errMsg={verification.getIn(['validateResult', 'msg'])} />
        }
      </StyledVerificationInput>
    );
  } else {
    return null;
  }

}

const mapStateToProps = (state) => ({
  phone: state.getIn(['registerReducer', 'phone']),
  verification: state.getIn(['registerReducer', 'verification'])
});

const mapDispatchToProps = (dispatch) => ({
  handleChange(e) {
    dispatch(actionCreators.changeVerificationValue(e.target.value));
  },
  handleFocus(e) {
    dispatch(actionCreators.toggleVerificationFocus(true));
  },
  handleBlur(e) {
    dispatch(actionCreators.changeVerificationVelidateResult(e.target.value));
    dispatch(actionCreators.toggleVerificationFocus(false));
  }
});

VerificationInput.propTypes = {
  phone: PropTypes.object.isRequired,
  verification: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleFocus: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(VerificationInput);