import styled from 'styled-components';

export const LoginInput = styled.form`
  .text-input input {
    width: 100%; height: 50px;
    padding: 4px 12px 4px 35px;
    background: hsla(0,0%,71%,.1);
    outline: none;
  }
  .ic-account, .ic-password {
    position: absolute;
    margin-top: 13px; margin-left: 9px;
    font-size: 20px;
    color: #969696;
  }
`;

export const UserName = styled.div`
  input {
    border: 1px solid #c8c8c8;
    border-radius: 4px 4px 0 0;
    border-bottom: none;
  }
`;

export const UserPassword = styled.div`
  input {
    border: 1px solid #c8c8c8;
    border-radius: 0 0 4px 4px;
  }
`;

export const Others = styled.div`
  margin: 15px 0;
  font-size: 15px;
  color: #969696;
  input {
    vertical-align: -1px;
  }
  label {
    cursor: pointer;
    input {
      cursor: pointer;
    }
  }
`;

export const SupportButton = styled.button`
  float: right;
  background: none;
  border: none;
  color: #999;
  padding: 0;
  font-size: 14px;
  outline: none;
  cursor: pointer;
`;

export const SubmitButton = styled.button`
  display: block;
  margin-top: 20px;
  margin-bottom: 20p;
  padding: 9px 18px;
  width: 100%;
  border: none;
  border-radius: 25px;
  background: #3194d0;
  color: #fff;
  font-size: 18px;
  outline: none;
  cursor: pointer;
`;

export const MoreSignWrapper = styled.div`
  margin-top: 50px;
  text-align: center;
  h6 {
    position: relative;
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
    font-size: 28px;
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