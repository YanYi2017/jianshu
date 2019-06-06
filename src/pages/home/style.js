import styled from 'styled-components';

export const HomeWraper = styled.div`
  overflow: hidden;
  width: 960px;
  margin: 0 auto;
  padding-top: 80px;
  background: yellow;
`;

export const HomeLeft = styled.div`
  float: left;
  width: 640px; height: 500px;
  padding-left: 15px;
  background: blue;
`;

export const HomeRight = styled.div`
  float: left;
  width: 280px; height: 200px;
  margin-left: 40px;
  background: red;
`;

export const CarouselWraper = styled.div`
  & img {
    width: 100%; height: 270px;
    border-radius: 6px;
  }
`;