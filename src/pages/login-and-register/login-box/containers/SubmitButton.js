import React, { PureComponent } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import _util from '../../../../util';
import { actionCreators } from '../store';
import { StyledSubmitButton } from '../style';

class SubmitButton extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.callback = (res) => {
      const { account, password, handleLogin } = this.props;

      if (account && password) {
        // 若拼图成功
        if (res.ret === 0) {
          axios.post(_util.getServerURL('/check_captcha'), {
            ticket: res.ticket
          })
            .then((res) => {
              // 若人机验证成功
              if (res.data.success) {
                handleLogin(account, password);
              }
              // 若人机验证失败
              else {
                alert('人机验证失败');
              }
            })
            .catch((err) => alert(err));
        }
      } else {
        alert('手机号码/邮箱或密码不能为空')
      }

    }
  }

  render() {
    return (
      <StyledSubmitButton
        type="button"
        id="TencentCaptcha"
        data-appid="2083658602"
        data-cbfn="callback"
      >
        登录
      </StyledSubmitButton>
    );
  }
}

const mapStateToProps = (state) => ({
  account: state.getIn(['loginReducer', 'account']),
  password: state.getIn(['loginReducer', 'password'])
});

const mapDispatchToProps = (dispatch) => ({
  handleLogin(account, password) {
    dispatch(actionCreators.login(account, password));
  }
});

SubmitButton.propTypes = {
  account: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  handleLogin: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(SubmitButton);