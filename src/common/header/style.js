import styled from 'styled-components';

import logoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.header`
  position: fixed;
  left: 0; right: 0;
  z-index: 999;
  height: 58px;
  border-bottom: 1px solid #f0f0f0;
  background: #fff;
`;

export const WidthLimit = styled.div`
  min-width: 768px; max-width: 1440px;
  margin: 0 auto;
`;

export const Logo = styled.a`
  float:left;
  width: 100px; height: 58px;
  background: url(${logoPic});
  background-size: contain;
`;

export const Nav = styled.div`
  overflow: hidden;
  width: 960px; height: 100%;
  margin: 0 auto;
`;

export const NavItem = styled.a`
  line-height: 28px;
  font-size: 17px;
  padding: 15px;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.homepage {
    color: #ea6f5a;
  }
`;

export const SearchWrapper = styled.div`
  & .ic-search {
    position: absolute;
    margin-top: 10px;
    margin-left: -38px;
    padding: 10px;
    border-radius: 20px;
    &.focused-enter-done {
      background: #969696;
      color: #fff;
    }
  }
`;

export const NavSearch = styled.input`
  margin: 9px 0 0 20px;
  padding: 0 40px 0 20px;
  width: 240px; height: 38px;
  border-radius: 19px;
  border: 1px solid #eee; outline: none;
  font-size: 14px;
  background: #eee;
  &::placeholder {
    color: #999;
  }
  &.focused-enter {
    width: 240px;
  }
  &.focused-enter-active {
    width: 320px;
    transition: width 500ms ease;
  }
  &.focused-enter-done {
    width: 320px;
  }
  &.focused-exit {
    width: 320px;
  }
  &.focused-exit-active {
    width: 240px;
    transition: width 500ms ease;
  }
  &.focused-exit-done {
    width: 240px;
  }
`;

export const SearchTrending = styled.div`
  position: absolute;
  margin-left: 215px; margin-top: 10px;
  width: 250px;
  padding: 20px;
  box-shadow: 0 0 8px rgba(0, 0, 0, .2);
  border-radius: 4px;
  background: #fff;
  &::before {
    content: '';
    position: absolute;
    margin-top: -44px;
    width: 0; height: 0;
    border: 12px solid transparent;
    border-bottom-color: #fff;
  }
`;

export const SearchTrendingHeader = styled.div`
  overflow:hidden;
  line-height: 20px;
  margin-bottom: 10px;
  & > span {
    float: left;
    font-size: 14px;
    color: #969696;
  }
  & > a {
    float: right;
    font-size: 13px;
    color: #969696;
  }
  & > a:hover {
    color: #2f2f2f;
  }
  & > a .ic-search-change {
    display: inline-block;
    margin-right: 3px;
    transition: all 0.2s ease;
  }
`;

export const SearchTrendingTag = styled.ul`
  & li {
    display: inline-block;
    margin-right: 10px;
    line-height: 28px;
  }
  & li a {
    padding: 2px 6px;
    font-size: 12px;
    color: #787878;
    border: 1px solid #ddd;
    border-radius: 3px;
  }
  & li a:hover {
    color: #333;
    border-color: #b4b4b4;
  }
`;

export const Addition = styled.div`
  float: right; 
  height:58px;
`;

export const Button = styled.a`
  float:right;
  margin: 9px 5px 0 15px;
  padding: 6px 12px;
  width: 80px; height: 38px;
  line-height: 26px;
  font-size: 15px;
  text-align: center;
  border: 1px solid #ea6f5a;
  border-radius: 20px;
  &.writing {
    width: 100px;
    background: #ea6f5a;
    color: #fff;  
  }
  &.register {
    background: transparent;
    color: #ea6f5a;
  }
`;