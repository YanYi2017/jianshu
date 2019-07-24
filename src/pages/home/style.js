import styled from 'styled-components';

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