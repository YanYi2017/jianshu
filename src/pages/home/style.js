import styled from 'styled-components';

export const HomeWraper = styled.div`
  overflow: hidden;
  width: 960px;
  margin: 0 auto;
  padding-top: 80px;
`;

export const HomeLeft = styled.div`
  float: left;
  width: 640px; height: 500px;
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