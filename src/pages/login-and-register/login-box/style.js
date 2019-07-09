import styled from 'styled-components';

export const StyledOthers = styled.div`
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

export const StyledLoginSupport = styled.div`
  float: right;
`;

export const StyledSupportButton = styled.button`
  padding: 0;
  color: #999;
  font-size: 14px;
  cursor: pointer;
  background: none;
  border: none;
  outline: none;
  :hover {
    color: #333;
  }
`;

export const StyledSupportList = styled.ul`
  // 根据传入的supportListShow判断是否显示
  display: ${props => props.supportListIsShow ? 'block' : 'none'};
  position: absolute;
  margin-top: 3px; margin-left: -90px;
  padding: 5px 0;
  line-height: 20px;
  font-size: 14px;
  border: 1px solid transparent;
  border-radius: 4px;
  z-index: 1000;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .2);
  background: #fff;
  li:hover {
    background: #f5f5f5;
  }
  a {
    display: block;
    padding: 10px 20px;
  }
`;

export const StyledSubmitButton = styled.button`
  display: block;
  margin-top: 20px;
  margin-bottom: 20px;
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

export const StyledMoreSignWay = styled.div`
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

export const SignWays = styled.ul`
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