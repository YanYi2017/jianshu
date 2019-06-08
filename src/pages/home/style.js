import styled from 'styled-components';

export const HomeWraper = styled.div`
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

export const CarouselWraper = styled.div`
  margin-bottom: 35px;
  & img {
    width: 100%; height: 270px;
    border-radius: 6px;
  }
`;

export const PopularTopicsWraper = styled.div`
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

export const ArticleListWraper = styled.ul`
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
  }
  .meta a:hover {
    color: #787878;
  }
  .meta > span {
    margin-right: 10px;
  }
`;


export const BoardWraper = styled.div`
  margin-top: -5px;
  & img {
    width: 100%; min-height: 50px;
    margin-bottom: 6px;
    border-radius: 4px;
  }
`;