import styled from 'styled-components';

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
  height: 58px;
  margin: 0 auto;
`;

export const Nav = styled.div`
  overflow: hidden;
  width: 960px; height: 100%;
  margin: 0 auto;
`;

export const NavItem = styled.div`
  line-height: 28px;
  font-size: 17px;
  padding: 15px;
  color: #333;
  cursor: pointer;
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