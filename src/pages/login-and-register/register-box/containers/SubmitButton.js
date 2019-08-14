import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import { StyledSubmitButton } from './style'
import { actionCreators } from '../store';

function SubmitButton({ history, handleClick }) {
  return (
    <StyledSubmitButton
      type="button"
      onClick={() => handleClick(history)}
    >
      注册
    </StyledSubmitButton>
  );
}

const mapDispatchToProps = (dispatch) => ({
  handleClick(history) {
    dispatch(actionCreators.register(history));
  }
});

SubmitButton.propTypes = {
  history: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default withRouter(connect(null, mapDispatchToProps)(SubmitButton));