import styled from 'styled-components';

export const RegisterInput = styled.form`
  .text-input input {
    width: 100%; height: 50px;
    padding: 4px 12px 4px 35px;
    background: hsla(0,0%,71%,.1);
    outline: none;
  }
  .ic-account, .ic-phone, .ic-verification, .ic-password {
    position: absolute;
    margin-top: 15px; margin-left: 8px;
    font-size: 20px;
    color: #969696;
  }
  .err-tips {
    position: absolute;
    margin-left: 8px; margin-top: 7px;
    padding: 5px 10px;
    line-height: 25px;
    border-radius: 4px;
    border: 1px solid #ea6f5a;
    background: #fff;
    opacity: .9;
    z-index: 1070;
  }
  .err-tips .err-arrow-border {
    position: absolute;
    margin-left: -17px; margin-top: 5px;
    border: 6px solid transparent;
    border-left: none;
    border-right-color: #ea6f5a;
  }
  .err-tips .err-arrow-bg {
    position: absolute;
    margin-left: -16px; margin-top: 5px;
    border: 6px solid transparent;
    border-left: none;
    border-right-color: #fff;
  }
  .err-tips .ic-error {
    color: #ea6f5a;
    margin-right: 5px;
  }
`;

export const Nickname = styled.div`
  input {
    border: 1px solid #c8c8c8;
    border-radius: 4px 4px 0 0;
    border-bottom: none;
  }
`;

export const MobilePhone = styled.div`
  input {
    border: 1px solid #c8c8c8;
    border-radius: 0;
    border-bottom: none;
  }
`;

export const Verification = styled.div`
  input {
    border: 1px solid #c8c8c8;
    border-radius: 0;
    border-bottom: none;
  }
  button {
    position: absolute;
    margin-top: 7px; margin-left: -106px;
    width: 100px; height: 36px;
    color: #fff;
    background: #42c02e;
    border: none;
    border-radius: 20px;
  }
`;

export const UserPassword = styled.div`
  input {
    border: 1px solid #c8c8c8;
    border-radius: 0 0 4px 4px;
  }
`;

export const SubmitButton = styled.button`
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

export const RegisterMsg = styled.div`
  margin: 10px 0;
  text-align: center;
  font-size: 12px;
  line-height: 20px;
  color: #969696;
  a {
    color: #3194d0;
  }
`;

export const MoreSignWrapper = styled.div`
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

export const MoreSignWay = styled.ul`
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