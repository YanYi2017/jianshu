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