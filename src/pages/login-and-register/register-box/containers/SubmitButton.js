import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { StyledSubmitButton } from '../style'

import { actionCreators } from '../store';
import { Input, Icon } from '../../common';
import { SideErrorTip } from '../components';

function SubmitButton({ nickname, phone, verification, password, handleRegister }) {
  return (
    <StyledSubmitButton
      type="button"
      onClick={() => handleRegister(nickname, phone, verification, password)}
    >
      注册
    </StyledSubmitButton>
  );
}

const mapStateToProps = (state) => ({
  nickname: state.getIn(['registerReducer', 'nickname']),
  password: state.getIn(['registerReducer', 'password'])
});

const mapDispatchToProps = (dispatch) => ({
  handleRegister(nickname, phone, verification, password) {
    console.log('register');
  },
});

SubmitButton.propTypes = {
  nickname: PropTypes.object.isRequired,
  phone: PropTypes.object.isRequired,
  verification: PropTypes.object.isRequired,
  password: PropTypes.object.isRequired,
  handleRegister: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(SubmitButton);