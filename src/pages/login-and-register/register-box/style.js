import styled from 'styled-components';

export const StyledSideErrorTip = styled.span`
  position: absolute;
  margin-top: 7px; margin-left: 13px;
  font-size: 14px;
  opacity: 0.9;
  .errorTip-arrow {
    position: absolute;
    margin-top: 12px;
    width: 0; height: 0;
    border: 5px solid transparent;
    border-left: none;
    border-right: 5px solid;
  }
  .errorTip-arrow.errorTip-arrow-border {
    margin-left: -5px;
    border-right-color: #ea6f5a;
  }
  .errorTip-arrow.errorTip-arrow-bg {
    margin-left: -3px;
    border-right-color: #fff;
  }
  .errorTip-inner {
    border: 1px solid #ea6f5a;
    border-radius: 4px;
    padding: 5px 10px;
    line-height: 25px;
    background: #fff;
    .ic-error {
      vertical-align: middle;
      margin-right: 5px;
      color: #ea6f5a;
      font-size: 20px;
    }
    .err-msg {
      vertical-align: middle;
    }
  }
`;

export const RegisterInput = styled.div`
  input {
    width: 100%; height: 50px;
    padding: 4px 12px 4px 35px;
    background: hsla(0,0%,71%,.1);
    outline: none;
  }
  .ic-account, .ic-phone, .ic-verification, .ic-password {
    position: absolute;
    margin-top: 15px; margin-left: 7px;
    font-size: 20px;
    color: #969696;
  }
`;


export const StyledVerificationInput = styled.div`
  input {
    padding-right: 115px;
  }
`;

export const StyledVerificationButton = styled.button`
  position: absolute;
  margin-top: 8px; margin-left: -105px;
  width: 100px; height: 36px;
  color: #fff;
  outline: none;
  cursor: pointer;
  background: #42c02e;
  border: none;
  border-radius: 20px;
  opacity: ${props => props.disabled && '.5'}
  pointer-events: ${props => props.disabled && 'none'}
`;

export const StyledSubmitButton = styled.button`
  display: block;
  margin-top: 20px;
  margin-bottom: 20p;
  padding: 9px 18px;
  width: 100%;
  border: none;
  border-radius: 25px;
  background: #42c02e;
  color: #fff;
  font-size: 18px;
  outline: none;
  cursor: pointer;
`;

export const StyledRegisterMsg = styled.div`
  margin: 10px 0;
  text-align: center;
  font-size: 12px;
  line-height: 20px;
  color: #969696;
  a {
    color: #3194d0;
  }
`;

export const MoreRegWayWrapper = styled.div`
  margin-top: 50px;
  text-align: center;
  h6 {
    position: relative;
    margin-bottom: 10px;
    font-size: 12px;
    color: #b5b5b5;
  }
  h6::before, h6::after {
    content: '';
    border-top: 1px solid;
    display: block;
    width: 60px;
    position: absolute;
    top: 5px;
  }
  h6::before {
    left: 30px;
  }
  h6::after {
    right: 30px;
  }
`;

export const StyledMoreRegWay = styled.ul`
  li {
    display: inline-block;
    margin: 0 5px;
    font-size: 35px;
    .ic-weibo { color: #e05244; }
    .ic-wechat { color: #00bb29; }
    .ic-qq { color: #498ad5; }
    .ic-douban { color: #00820f; }
  }
  a {
    width: 50px; height: 50px; line-height: 50px;
    display: inline-block;
  }
`;