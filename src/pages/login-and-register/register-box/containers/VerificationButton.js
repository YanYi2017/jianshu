import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';

import _util from '../../../../util';

import { StyledVerificationButton } from './style';
import { actionCreators } from '../store';

class VerificationButton extends PureComponent {
  componentDidMount() {
    const { handleCountdown, handleErrTip } = this.props;

    window.handleCaptcha = (res) => {
      // 若拼图成功
      if (res.ret === 0) {
        // 请求服务端处理返回的验证票据
        axios.post(_util.getServerURL('/check_captcha'), {
          ticket: res.ticket
        })
          .then(response => {
            if (response.data.success) {
              // 发送验证码按钮20s内不能点击
              handleCountdown(20);
              this.timerId = window.setInterval(this.tick, 1000);
            }
            else {
              handleErrTip('人机验证失败，请重试');
            }
          })
          .catch(err => {
            console.log(err);
            handleErrTip('人机验证失败，请重试');
          });
      }
    }
    new window.TencentCaptcha(document.getElementById('Captcha'));

  }

  tick = () => {
    let countdown = this.props.countdown;
    const { handleCountdown } = this.props;
    if (countdown > 0) {
      countdown -= 1;
      handleCountdown(countdown);
    } else {
      clearTimeout(this.timerId);
    }
  };

  componentWillUnmount() {
    delete window.handleCaptcha;
    clearTimeout(this.timerId);
  }

  render() {
    const { phone, countdown } = this.props;
    const disabled = countdown > 0 || !phone.getIn(['validateResult', 'status']);
    const innerText = countdown > 0 ? `重新发送(${countdown}s)` : '发送验证码';

    return (
      <StyledVerificationButton
        disabled={disabled}
        id="Captcha"
        data-appid="2083658602"
        data-cbfn="handleCaptcha"
      >
        {innerText}
      </StyledVerificationButton>
    );
  }
}

const mapStateToProps = state => ({
  phone: state.getIn(['registerReducer', 'phone']),
  countdown: state.getIn(['registerReducer', 'countdown'])
});

const mapDispatchToProps = dispatch => ({
  handleCountdown(countdown) {
    dispatch(actionCreators.changeCountdown(countdown));
  },
  handleErrTip(errMsg) {
    dispatch(actionCreators.changeErrTip(errMsg));
  }
});

VerificationButton.propTypes = {
  phone: PropTypes.object.isRequired,
  countdown: PropTypes.number.isRequired,
  handleCountdown: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(VerificationButton);