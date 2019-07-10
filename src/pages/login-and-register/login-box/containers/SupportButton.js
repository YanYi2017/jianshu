import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { actionCreators } from '../store';

import { StyledSupportButton } from './style';

function SupportButton({ showSupportList }) {
  return (
    <StyledSupportButton
      type="button"
      onClick={showSupportList}
    >
      登录遇到问题？
    </StyledSupportButton>
  );
}

const mapDispatchToProps = (dispatch) => ({
  showSupportList() {
    dispatch(actionCreators.toggleSupportList(true));
  }
});

SupportButton.propTypes = {
  showSupportList: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(SupportButton);