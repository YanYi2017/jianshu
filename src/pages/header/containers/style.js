import styled from 'styled-components';
import { color, borderColor, boxBackgroundColor, inputBackgroundColor } from '../../../common/style';

export const StyledMiddle = styled.div`
  width: 960px; height: 100%;
  margin: 0 auto;
  background: inherit;
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
  border: 1px solid transparent; outline: none;
  border-radius: 19px;
  font-size: 14px;
  color: ${color};
  background: ${inputBackgroundColor};
  
  ::placeholder {
    color: #999;
  }

  @media(min-width: 1439px) {
    width: 240px;
    &.focused-enter { width: 240px; }
    &.focused-enter-active { width: 320px; transition: 500ms ease-in; }
    &.focused-enter-done { width: 320px; }
    &.focused-exit { width: 320px; }
    &.focused-exit-active { width: 240px; transition: 500ms ease-in; }
    &.focused-exit-done { width: 240px; }
  }
  @media(min-width: 1081px) and (max-width: 1439px) {
    width: 160px;
    &.focused-enter { width: 160px; }
    &.focused-enter-active { width: 240px; transition: 500ms ease-in; }
    &.focused-enter-done { width: 240px; }
    &.focused-exit { width: 240px; }
    &.focused-exit-active { width: 160px; transition: 500ms ease-in; }
    &.focused-exit-done { width: 160px; }
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

  &.focused-enter-done { background: #969696; color: #fff; }
`;

export const StyledSearchTrending = styled.div`
  position: absolute;
  width: 250px;
  padding: 20px;
  box-shadow: 0 0 8px rgba(0, 0, 0, .2);
  border-radius: 4px;
  background: ${boxBackgroundColor};
  &::before {
    content: '';
    position: absolute;
    margin-top: -42px;
    width: 0; height: 0;
    border: 12px solid transparent;
    border-bottom-color: ${boxBackgroundColor};
  }
`;

export const StyledMode = styled.div`
  float: right;
  width: 45px; height: 100%;  
  
  & > button {
    border: none;
    width: 100%; height: 100%;
    font-size: 28px;
    color: #969696;
  }
`;

export const StyledModeList = styled.ul`
  position: absolute;
  margin-left: -170px;
  color: #969696;
  background: ${boxBackgroundColor};
  border-radius: 4px;
  font-size: 14px;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
  z-index: 999;
  li { padding: 20px 25px; }

  li:first-child {
    border-bottom: 1px solid ${borderColor};
    div {
      display: inline-block;
      width: 50%;
      text-align: center;
      .iconfont { font-size: 17px; margin-right: 3px; }
    }
    div:first-child { padding-right: 10px; }
    div:last-child { padding-left: 10px; }
  }
  li:last-child {
    div:first-child { margin-bottom: 10px; }
  }

  ::before {
    position: absolute;
    margin-top: -10px; margin-left: 180px;
    content: '';
    border: 10px solid transparent;
    border-top: none;
    border-bottom-color: ${boxBackgroundColor};
  }
`;