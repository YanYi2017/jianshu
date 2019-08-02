import styled from 'styled-components';
import { color, borderColor } from '../../common/style';

export const AuthorWrapper = styled.div`
  margin: 30px 0 40px 0;
  & > a {
    display: inline-block;
    vertical-align: middle;
    width: 48px; height: 48px;
  }
  & > a > img {
    width: 100%; height: 100%;
    border: 1px solid ${borderColor};
    border-radius: 50%;
  }
`;

export const AuthorInfo = styled.div`
  display: inline-block;
  vertical-align: middle;
  margin-left: 10px;
  & > a {
    margin-right: 7px;
    vertical-align: middle;
    color: ${color};
  }
  & > img {
    width:20px; height:20px;
    vertical-align: middle;
    margin-right: 7px;
    color: ${color};
  }
  button {
    background: #42c02e;
    border-radius: 40px;
    border: none;
    color: #fff;
    font-size: 12px;
    cursor: pointer;

    span {
      font-size: 15px;
      margin-right: 3px;
    }
  }
  .meta {
    margin-top:7px;
    font-size: 12px;
    color: #969696;
  }
  .meta > span {
    margin-right: 8px;
  }
  .meta .jsd-meta {
    color:#ea6f5a;
  }
`;