import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { actionCreators } from '../store';
import { Input, Icon } from '../../common';
import { SideErrorTip } from '../components';

function MobilePhoneInput({ phone, handleChange, handleFocus, handleBlur }) {
  return (
    <div>
      <Icon type='phone' />
      <Input
        type="text"
        name="phone"
        value={phone.get('value')}
        placeholder="手机号"
        position='middle'
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      {
        !phone.get('isFocused')
          && phone.getIn(['validateResult', 'msg'])
          && <SideErrorTip errMsg={phone.getIn(['validateResult', 'msg'])} />
      }
    </div>
  );
}

const mapStateToProps = (state) => ({
  phone: state.getIn(['registerReducer', 'phone'])
});

const mapDispatchToProps = (dispatch) => ({
  handleChange(e) {
    dispatch(actionCreators.changePhoneValidateResult(e.target.value));
    dispatch(actionCreators.changePhoneValue(e.target.value));
  },
  handleFocus(e) {
    dispatch(actionCreators.togglePhoneFocus(true));
  },
  handleBlur(e) {
    dispatch(actionCreators.togglePhoneFocus(false));
  }
});

MobilePhoneInput.propTypes = {
  phone: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleFocus: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(MobilePhoneInput);