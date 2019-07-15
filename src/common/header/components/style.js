import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Logo = styled(Link)`
  float:left;
  width: 100px; height: 100%;
  img {
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

export const StyledButton = styled.button`
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
`;

export const StyledWriter = styled(StyledDiv)`
  margin-right: 10px;
  a {
    width: 100px;
    background: #ea6f5a;
    border: 1px solid transparent;
    color: #fff;
  }

  a: hover {
    background: #ec6149;
  }

  .iconfont {
    margin-right: 3px;
    font-size: 19px;
    vertical-align: middle;
  }
`;

export const StyledRegister = styled(StyledDiv)`
  a {
    border: 1px solid rgba(236,97,73,.7);
    color: #ea6f5a;
  }
  a:hover {
    color: #ec6149;
    border-color: #ec6149;
    background-color: rgba(236,97,73,.05);
  }
`;

export const StyledLogin = styled(StyledDiv)`
  a {
    width: 56px;
    color: #969696;
  }
`;

export const StyledDiamond = styled(StyledDiv)`
  width: 80px;
  button {
    position: absolute;
    width: 80px; height: 30px;
    top: 0; right: 0; bottom: 0; left: 0;
    margin: auto;
  }
  img {
    height: 25px;
  }
`;

export const StyledMode = styled(StyledDiv)`
  width: 45px;
  
  button {
    width: 100%; height: 100%;
    font-size: 28px;
    color: #969696;
  }
`;