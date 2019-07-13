import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import _util from '../../../../util';

import { StyledVerificationButton } from './style';

class VerificationButton extends PureComponent {
  componentDidMount() {
    window.handleCaptcha = function (res) {
      // 若拼图成功
      if (res.ret === 0) {
        // 请求服务端处理返回的验证票据
        axios.post(_util.getServerURL('/check_captcha'), {
          ticket: res.ticket
        })
          .then(response => {
            if (response.data.success) {
              console.log('success');
            }
            else {
              alert('人机验证失败，请重试');
            }
          })
          .catch(err => {
            alert('人机验证失败，请重试');
          });
      }
    }
    new window.TencentCaptcha(document.getElementById('Captcha'));
  }

  componentWillUnmount() {
    delete window.handleCaptcha;
  }

  render() {
    const { disabled } = this.props;

    return (
      <StyledVerificationButton
        disabled={disabled}
        id="Captcha"
        data-appid="2083658602"
        data-cbfn="handleCaptcha"
      >
        发送验证码
      </StyledVerificationButton>
    );
  }
}

VerificationButton.propTypes = {
  disabled: PropTypes.bool.isRequired
};

export default VerificationButton;