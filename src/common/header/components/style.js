import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Logo = styled(Link)`
  float:left;
  width: 100px; height: 100%;
  & > img {
    width: 100%; height: 100%;
  }
`;

export const StyledRight = styled.div`
  float: right; 
  height: 100%;
`;

export const StyledDiv = styled.div`
  position: relative;
  float: right;
  width: 100px; height: 100%;
`;

export const StyledLink = styled(Link)`
  position: absolute;
  top: 0; right: 0; bottom: 0; left: 0;
  margin: auto;
  width: 80px; height: 40px; line-height: 40px;
  text-align: center;
  border-radius: 20px;
  user-select: none;
`;

export const StyledButton = styled.button`
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
`;

export const StyledWriter = styled(StyledDiv)`
  margin-right: 10px;
  & > a {
    width: 100px;
    background: #ea6f5a;
    border: 1px solid transparent;
    color: #fff;
  }

  & > a: hover {
    background: #ec6149;
  }

  .iconfont {
    margin-right: 3px;
    font-size: 19px;
    vertical-align: middle;
  }
`;

export const StyledRegister = styled(StyledDiv)`
  & > a {
    border: 1px solid rgba(236,97,73,.7);
    color: #ea6f5a;
  }
  & > a:hover {
    color: #ec6149;
    border-color: #ec6149;
    background-color: rgba(236,97,73,.05);
  }
`;

export const StyledLogin = styled(StyledDiv)`
  & > a {
    width: 56px;
    color: #969696;
  }
`;

export const StyledDiamond = styled(StyledDiv)`
  width: 80px;
  & > button {
    position: absolute;
    width: 80px; height: 30px;
    top: 0; right: 0; bottom: 0; left: 0;
    margin: auto;
  }
  img {
    height: 25px;
  }
`;

export const StyledMode = styled(StyledDiv)`
  width: 45px;
  
  & > button {
    width: 100%; height: 100%;
    font-size: 28px;
    color: #969696;
  }
`;

export const StyledMenuButton = styled(StyledButton)`
  display: none;
  border: 1px solid rgb(221, 221,221);
  border-radius: 4px;
  padding: 10px;
  color: #777;
  
  :hover { background: #eee; }
  @media (min-width: 320px) and (max-width: 870px) {
    display: inline;
  }
`;

export const StyledNavList = styled.ul`
  float: left;
  height: 100%;
  padding: 0 15px;

  & > li { float: left; height: 100%; }

  @media (min-width: 320px) and (max-width: 870px) {
    display: none;
    position: absolute;
    top: 100%; left: 0; right: 0;
    height: auto;
    background: #fff;

    border-top: 1px solid #f0f0f0;
    border-bottom: 1px solid #f0f0f0;

    & > li { float: none; height: 58px; }
    & > li + li { border-top: 1px solid #f0f0f0; }

    &.showed-enter { height: 0; display: block; }
    &.showed-enter-active {
      overflow: hidden; 
      height: 175px;
      display: block;
      transition: all 300ms ease-out;
    }
    &.showed-enter-done {
      overflow: visible;
      display: block;
      height: 175px;
    }
    &.showed-exit {
      overflow: hidden;
      display: block;
      height: 175px;
    }
    &.showed-exit-active {
      overflow: hidden;
      display: block;
      height: 0;
      transition: all 300ms ease-out;
    }
    &.showed-exit-done {
      overflow: visible;
      display: none; height: 0;
    }
  }
`;

export const StyledMiddleLink = styled(Link)`
  display: block;
  height: 100%;
  padding: 0 15px;
  color: ${props => props.currentURL === props.to && '#ea6f5a'};
  .iconfont { font-size: 20px; }
  .menu-text { display: none; }
  :hover {
    background: ${props => props.currentURL !== props.to && '#f5f5f5'};
  }
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

export const StyledTrendingHeader = styled.div`
  overflow:hidden;
  line-height: 20px;
  margin-bottom: 10px;
  & > span {
    float: left;
    font-size: 14px;
    color: #969696;
  }
  & > button {
    float: right;
    border: none;
    font-size: 13px;
    color: #969696;
  }
  & > button:hover {
    color: #2f2f2f;
  }
  .ic-search-change {
    display: inline-block;
    margin-right: 4px;
    transition: all 0.2s ease;
  }
`;

export const StyledTrendingTags = styled.ul`
  & > li {
    display: inline-block;
    margin-right: 10px;
    line-height: 28px;
  }
  & > li > a {
    padding: 2px 6px;
    font-size: 12px;
    color: #787878;
    border: 1px solid #ddd;
    border-radius: 3px;
  }
  & > li > a:hover {
    color: #333;
    border-color: #b4b4b4;
  }
`;