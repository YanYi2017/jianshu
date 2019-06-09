import styled from 'styled-components';

export const HomeWrapper = styled.div`
  overflow: hidden;
  width: 960px;
  margin: 0 auto;
  padding-top: 80px;
`;

export const HomeLeft = styled.div`
  float: left;
  width: 640px;
  padding-left: 15px;
`;

export const HomeRight = styled.div`
  float: left;
  width: 280px; height: 200px;
  margin-left: 40px;
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

export const ArticleListWrapper = styled.ul`
  list-style: none;
  & li {
    position: relative;
    min-height: 140px;
    margin: 0 0 15px 0;
    padding: 15px 2px 20px 0;
    border-bottom: 1px solid #f0f0f0;
  }
  & li > a {
    position: absolute;
    top: 50%; right: 0;
    margin-top: -60px;
  }
  & li img {
    width: 150px; height: 100px;
    border: 1px solid #f0f0f0;
    border-radius: 4px;
  }
  & li > div {
    padding-right: 165px;
  }
  .title {
    display: block;
    margin-bottom: 4px;
    font-size: 18px; font-weight: 700;
    line-height: 1.5;
    color: #333;
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
    border: 1px solid #ddd;
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
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    color: #787878;
    background: #f7f7f7;
  }
`;

export const BackTop = styled.button`
  position: fixed;
  right: 40px; bottom: 40px;
  width: 52px; height: 52px;
  border: 1px solid #dcdcdc;
  background: transparent;
  outline: none;
  padding: 0;
  z-index: 1040;
  cursor: pointer;
`;