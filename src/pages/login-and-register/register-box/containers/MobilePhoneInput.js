import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { actionCreators } from '../store';
import { Input, Icon } from '../../common';
import { SideErrorTip } from '../components';


class MobilePhoneInput extends PureComponent {
  render() {
    const { phone, handlePhoneChange, handlePhoneFocus, handlePhoneBlur } = this.props;

    return (
      <div>
        <Icon type='phone' />
        <Input
          type="text"
          name="phone"
          value={phone.get('value')}
          placeholder="手机号"
          position='middle'
          onChange={handlePhoneChange}
          onFocus={handlePhoneFocus}
          onBlur={handlePhoneBlur}
        />
        {
          !phone.get('focused')
          && phone.getIn(['validateResult', 'msg'])
          && <SideErrorTip errMsg={phone.getIn(['validateResult', 'msg'])} />
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  phone: state.getIn(['registerReducer', 'phone'])
});
const mapDispatchToProps = (dispatch) => ({
  handlePhoneChange(e) {
    dispatch(actionCreators.changePhone(e.target.value));
  },
  handlePhoneFocus(e) {
    dispatch(actionCreators.focusPhone());
  },
  handlePhoneBlur(e) {
    dispatch(actionCreators.blurPhone());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MobilePhoneInput);