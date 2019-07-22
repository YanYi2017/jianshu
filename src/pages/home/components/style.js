import styled from 'styled-components';
import { color, borderColor, boxBackgroundColor } from '../../../common/style';

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

export const AddMore = styled.button`
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