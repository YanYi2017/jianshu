import styled from 'styled-components';

export const OuterWrapper = styled.div`
  overflow: hidden;  //创建块状格式化上下文，以避免父子元素的margin合并
  min-height: 750px;
  background: #f1f1f1;
`;

export const Logo = styled.div`
  position: absolute;
  top: 56px;
  left: 50px;
  img {
    width: 100px;
  }
`;

export const InnerBox = styled.div`
  width: 400px; height: 500px;
  margin: 110px auto;
  padding: 50px 50px 30px 50px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.div`
  text-align: center;
  padding: 10px;
  font-size: 18px; font-weight: 700;
  color: #969696;
  margin-bottom: 50px;
  a {
    padding: 10px;
    color: #969696;
  }
  a:hover {
    border-bottom: 2px solid #ea6f5a;
  }
  span {
    padding: 10px;
  }
  .active {
    color: #ea6f5a;
    border-bottom: 2px solid #ea6f5a;
  }
`;