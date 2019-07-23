import styled from 'styled-components';
import { color, borderColor, boxBackgroundColor, linkColor } from '../../common/style';

export const HomeWrapper = styled.div`
  overflow: hidden;
  width: 960px;
  margin: 0 auto;
  padding: 80px 15px 0 15px;

  @media (max-width: 1080px) {
    width: 750px;
  }
`;

export const CarouselWrapper = styled.div`
  margin-bottom: 35px;
  & img {
    width: 100%; height: 270px;
    border-radius: 6px;
  }
`;

export const PopularTopicsWrapper = styled.div`
  margin-bottom: 20px;
  & a {
    display: inline-block;
    margin: 0 18px 18px 0;
    background: #f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    color: #333;
    text-decoration: none;
  }
  & img {
    width: 32px; height: 32px;
    border-radius: 2px;
    vertical-align: middle;
  }
  & span {
    padding: 0 11px 0 6px;
    font-size: 14px;
  }
  & .more-hot-topics {
    border: none;
    color: #787878;
    background: none;
  }
`;

export const BoardWrapper = styled.div`
  margin: -5px 0 20px 0;
  & img {
    width: 100%; min-height: 50px;
    margin-bottom: 6px;
    border-radius: 4px;
  }
`;

export const RecommendedAuthorsWrapper = styled.div`
  font-size: 13px;
  .title {
    line-height: 20px;
    font-size: 14px;
    color: #969696;
    margin-bottom: 15px;
  }
  .page-change {
    float: right;
    color: #969696;
  }
  & ul {
    margin-bottom: 20px;
  }
  & li {
    overflow: hidden;
    margin-bottom: 15px;
  }
  .avatar {
    float: left;
    width: 48px; height: 48px;
    margin-right: 10px;
  }
  .avatar img {
    width: 100%; height: 100%;
    border: 1px solid ${borderColor};
    border-radius: 50%;
  }
  .follow {
    float: right;
    margin-top: 5px;
    color: #42c02e;
  }
  .follow > span {
    font-size: 17px;
  }
  .name {
    display: block;
    line-height: 20px;
    padding-top: 5px;
    font-size: 14px;
    color: ${color};
  }
  p {
    margin-top: 2px;
    font-size: 12px;
    color: #969696;
  }
  .find-more {
    display: block;
    padding: 7px;
    line-height: 18px;
    text-align: center;
    border: 1px solid ${borderColor};
    border-radius: 4px;
    color: ${linkColor};
    background: ${boxBackgroundColor};
  }
`;