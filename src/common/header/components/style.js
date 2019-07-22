import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { color, borderColor, boxBackgroundColor, hoveredBoxBackgroundColor, buttonHoverColor, linkColor, linkBorderColor, hoveredLinkColor, hoveredLinkBorderColor } from '../../style';

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
    border: none;

    img {
      height: 25px;
    }
  }
`;

export const StyledMenuButton = styled.button`
  display: none;
  border: 1px solid ${borderColor};
  border-radius: 4px;
  padding: 10px;
  color: #777;
  
  :hover { background: ${buttonHoverColor}; }
  @media (min-width: 320px) and (max-width: 870px) {
    display: inline;
  }
`;

export const StyledNavList = styled.ul`
  background: ${boxBackgroundColor};
  float: left;
  height: 100%;
  padding: 0 15px;

  & > li { float: left; height: 100%; }

  @media (min-width: 320px) and (max-width: 870px) {
    display: none;
    position: absolute;
    top: 100%; left: 0; right: 0;
    height: auto;

    border-top: 1px solid ${borderColor};
    border-bottom: 1px solid ${borderColor};

    & > li { float: none; height: 58px; }
    & > li + li { border-top: 1px solid ${borderColor}; }

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
  color: ${props => props.currentURL === props.to ? '#ea6f5a' : color};
  .iconfont { font-size: 20px; }
  .menu-text { display: none; }
  :hover {
    background: ${props => props.currentURL !== props.to && hoveredBoxBackgroundColor};
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
    color: ${color};
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
    color: ${linkColor};
    border: 1px solid ${linkBorderColor};
    border-radius: 3px;
  }
  & > li > a:hover {
    color: ${hoveredLinkColor};
    border-color: ${hoveredLinkBorderColor};
  }
`;

export const StyledDialog = styled.div`
  position: fixed;
  top: 0; right: 0; bottom: 0; left: 0;
  background: rgba(0, 0, 0, 0.5);
  & > div {
    margin: 80px auto 0 auto;
    padding: 40px 70px;
    width: 380px;
    background: ${boxBackgroundColor};
    color: ${color};

    h4 {
      text-align: center;
      font-size: 18px;
      line-height: 25px;

      span {
        color: #e9634c;
      }
    }

    div { text-align: center; padding: 15px 10px;}

    img {
      width: 190px; height: 190px;
      margin-bottom: 5px;
    }

    button {
      background-color: #e9634c;
      color: #fff;
      border: none;
      border-radius: 20px;
      width: 190px; height: 40px;
      font-size: 14px;
    }
  }
`;