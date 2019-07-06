import styled from 'styled-components';

export const StyledLoginBox = styled.form`
  .text-input input {
    width: 100%; height: 50px;
    padding: 4px 12px 4px 35px;
    background: hsla(0,0%,71%,.1);
    outline: none;
  }
  `;

export const StyledIcon = styled.span`
  &.ic-account, &.ic-password {
    position: absolute;
    margin-top: 13px; margin-left: 9px;
    font-size: 20px;
    color: #969696;
  }
`;

export const StyledInput = styled.input`
  width: 100%; height: 50px;
  padding: 4px 12px 4px 35px;
  background: hsla(0,0%,71%,.1);
  outline: none;
  border: 1px solid #c8c8c8;

  // 根据传入的position参数值来生成不同的radius和botton
  border-radius: ${props => {
    switch (props.position) {
      case 'top':
        return '4px 4px 0 0';
      case 'middle':
        return '0';
      case 'bottom':
        return '0 0 4px 4px';
      default:
        return '4px';
    }
  }}
  border-bottom: ${props => {
    switch (props.position) {
      case 'top':
      case 'middle':
        return 'none';
    }
  }}
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