import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { actionCreators } from '../store';
import { Input, Icon } from '../../common';
import VerificationButton from './VerificationButton';

import { StyledVerificationInput } from '../style';

function VerificationInput({ phone, verification, handleVerificationValueChange }) {
  return (
    <StyledVerificationInput>
      <Icon type="verification" />
      <Input
        type="text"
        name="verification"
        value={verification.get('value')}
        placeholder="手机验证码"
        position="middle"
        onChange={handleVerificationValueChange}
      />
      <VerificationButton disabled={phone.getIn(['validateResult', 'status']) ? false : true} />
    </StyledVerificationInput>
  );
}

const mapStateToProps = (state) => ({
  phone: state.getIn(['registerReducer', 'phone']),
  verification: state.getIn(['registerReducer', 'verification'])
});
const mapDispatchToProps = (dispatch) => ({
  handleVerificationValueChange(e) {
    dispatch(actionCreators.changeVerificationValue(e.target.value));
  }
});

VerificationInput.propTypes = {
  phone: PropTypes.object.isRequired,
  verification: PropTypes.object.isRequired,
  handleVerificationValueChange: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(VerificationInput);