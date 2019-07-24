import styled from 'styled-components';
import theme from 'styled-theming';
import { ON, OFF } from '../../../common/constants';
import { color, borderColor, boxBackgroundColor } from '../../../common/style';

const loadingBackgroundColor = theme('mode', {
  [ON]: '#545454',
  [OFF]: '#eaeaea'
});

export const StyledBackToTop = styled.button`
  position: fixed;
  right: 40px; bottom: 40px;
  width: 52px; height: 52px;
  outline: none;
  padding: 0;
  z-index: 1040;
  cursor: pointer;
  color: ${color};
  border: 1px solid ${borderColor};
  background: ${boxBackgroundColor};
`;

export const StyledArticle = styled.li`
  position: relative;
  min-height: 140px;
  margin: 0 0 15px 0;
  padding: 15px 2px 20px 0;
  border-bottom: 1px solid ${borderColor};
  & > a {
    float: right;
  }
  img {
    width: 150px; height: 100px;
    margin-left: 10px;
    border: 1px solid ${borderColor};
    border-radius: 4px;
  }
  .title {
    display: block;
    margin-bottom: 4px;
    font-size: 18px; font-weight: 700;
    line-height: 1.5;
    color: ${color};
  }
  .title:visited {
    color: #969696;
  }
  .title:hover {
    text-decoration: underline;
  }
  .abstract {
    margin-bottom: 8px;
    font-size: 13px;
    line-height: 24px;
    color: #999;
  }
  .meta {
    font-size: 12px; font-weight: 400;
    color: #b4b4b4;
  }
  .meta .jsd-meta {
    margin-right: 10px;
    color: #ea6f5a;
  }
  .meta a {
    margin-right: 10px;
    color: #b4b4b4;
  }
  .meta a:hover {
    color: #787878;
  }
  .meta > span {
    margin-right: 10px;
  }
`;

export const StyledAddMore = styled.button`
  display: block;
  width: 100%;
  margin: 30px auto 60px;
  padding: 10px 15px;
  font-size: 15px;
  border: none;
  border-radius: 20px;
  outline: none;
  background: #a5a5a5;
  color: #fff;
  cursor: pointer;

  &:hover {
    background: #9b9b9b;
  }
`;

export const StyledLoadingArticleList = styled.li`
  overflow: hidden;
  padding-top: 15px;
  margin-bottom: 50px;

  .img {
    float: right;
    width: 150px; height: 100px;
    background: ${loadingBackgroundColor};
  }
  .content { padding-right: 165px; }
  .title {
    width: 50%; height: 20px;
    margin-bottom: 15px;
    background: ${loadingBackgroundColor};
  }
  .text {
    width: 100%; height: 16px;
    margin-bottom: 10px;
    background: ${loadingBackgroundColor};
    animation: loading .5s ease-in-out infinite alternate;
    @keyframes loading {
      from { width: 60%; }
      to  { width: 100%; }
    }
  }
  .text.animation-delay {
    animation-delay: .5s; 
  }
  .meta { font-size: 12px; height: 16px; color: ${loadingBackgroundColor};}
  .read {
    display: inline-block;
    vertical-align: middle;
    width: 50px; height: 100%;
    background: ${loadingBackgroundColor};
  }
  .ic-list-comments { vertical-align: middle; margin: 0 5px; }
  .small {
    display: inline-block;
    vertical-align: middle;
    width: 30px; height: 100%;
    background: ${loadingBackgroundColor};
  }
  .ic-list-like { vertical-align: middle; margin: 0 5px; }
`;

export const BoardWrapper = styled.div`
  margin: -5px 0 20px 0;
  & img {
    width: 100%;;
    margin-bottom: 6px;
    border-radius: 4px;
  }
`;