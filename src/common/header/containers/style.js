import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledMiddle = styled.div`
  width: 960px; height: 100%;
  margin: 0 auto;
`;

export const StyledLink = styled(Link)`
  display: inline-block;
  width: 100px; height: 100%;
  line-height: 58px;
  text-align: center;
  .iconfont {
    font-size: 20px;
    margin-right: 5px;
  }
  span {
    vertical-align: middle;
  }
`;

export const StyledHomepage = styled(StyledLink)`
  color: #ea6f5a;
`;

export const StyledDownload = styled(StyledLink)`
  width: 120px;
  :hover {
    background: #f5f5f5;
  }
`;

export const StyledSearchInput = styled.div`
  display: inline-block;
  height: 100%;
  padding-left: 15px;
`;

export const StyledInput = styled.input`
  width: 240px; height: 38px;
  padding: 0 40px 0 20px;
  border: 1px solid #eee; outline: none;
  border-radius: 19px;
  font-size: 14px;
  background: #eee;
  
  ::placeholder {
    color: #999;
  }

  &.focused-enter {
    width: 240px;
  }
  &.focused-enter-active {
    width: 320px;
    transition: 500ms ease-in;
  }
  &.focused-enter-done {
    width: 320px;
  }
  &.focused-exit {
    width: 320px;
  }
  &.focused-exit-active {
    width: 240px;
    transition: 500ms ease-in;
  }
  &.focused-exit-done {
    width: 240px;
  }
`;

export const StyledIcon = styled.span`
  margin-left: -36px;
  padding: 10px;
  border-radius: 20px;
  color: #969696;

  &.focused-enter-done {
    background: #969696;
    color: #fff;
  }
`;