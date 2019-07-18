import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledMiddle = styled.div`
  width: 960px; height: 100%;
  margin: 0 auto;
  ul { float: left; height: 100%; padding: 0 15px; }
  li { float: left; height: 100%; }

  @media (min-width: 320px) and (max-width: 870px) {
    ul {
      position: absolute;
      top: 100%; left: 0; right: 0;
      height: auto;
      background: #fff;
    }
    li {
      float: none;
      border-bottom: 1px solid #f0f0f0;
      height: 58px;
    }
  }
`;

export const StyledLink = styled(Link)`
  display: block;
  height: 100%;
  padding: 0 15px;
  .iconfont { font-size: 20px; }
  .menu-text { display: none; }

  @media(min-width: 1440px) {
    .menu-text { display: inline; }
    .iconfont { margin-right: 5px; } 
  }
  @media(min-width: 1081px) and (max-width: 1439px) {
    .menu-text { display: inline; }
    .iconfont { display: none; }
  }
  @media(min-width: 320px) and (max-width: 870px) {
    display: block;
    text-align: center;
    .iconfont { display: none; }
    .menu-text { display: inline; }
  }
`;

export const StyledHomepage = styled(StyledLink)`
  color: #ea6f5a;
`;

export const StyledDownload = styled(StyledLink)`
  :hover {
    background: #f5f5f5;
  }
`;

export const StyledSearchInput = styled.div`
  display: inline-block;
  height: 100%;
  padding: 10px 15px;
  @media (min-width: 320px) and (max-width: 870px) {
    display: block;
  }
`;

export const StyledInput = styled.input`
  width: 150px; height: 38px;
  padding: 0 40px 0 20px;
  border: 1px solid #eee; outline: none;
  border-radius: 19px;
  font-size: 14px;
  background: #eee;
  
  ::placeholder {
    color: #999;
  }

  @media(min-width: 1439px) {
    width: 240px;
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
  }
  @media(min-width: 1081px) and (max-width: 1439px) {
    width: 160px;
    &.focused-enter {
      width: 160px;
    }
    &.focused-enter-active {
      width: 240px;
      transition: 500ms ease-in;
    }
    &.focused-enter-done {
      width: 240px;
    }
    &.focused-exit {
      width: 240px;
    }
    &.focused-exit-active {
      width: 160px;
      transition: 500ms ease-in;
    }
    &.focused-exit-done {
      width: 160px;
    }
  }
  @media (min-width: 320px) and (max-width: 870px) {
    width: 100%;
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