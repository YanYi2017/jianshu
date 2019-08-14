import styled from 'styled-components';
import { boxBackgroundColor } from '../../../../common/style';
import { linkColor, hoveredLinkColor, hoveredBoxBackgroundColor } from '../../../../common/style';

export const StyledSupportButton = styled.button`
  padding: 0;
  color: ${linkColor};
  font-size: 14px;
  cursor: pointer;
  background: none;
  border: none;
  outline: none;
  :hover {
    color: ${hoveredLinkColor};
  }
`;

export const StyledSupportList = styled.ul`
  // 根据传入的supportListShow判断是否显示
  display: ${props => props.supportListIsShow ? 'block' : 'none'};
  position: absolute;
  margin-top: 3px; margin-left: -90px;
  padding: 5px 0;
  line-height: 20px;
  font-size: 14px;
  border: 1px solid transparent;
  border-radius: 4px;
  z-index: 1000;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .2);
  background: ${boxBackgroundColor};
  li:hover {
    background: ${hoveredBoxBackgroundColor};
  }
  a {
    display: block;
    padding: 10px 20px;
    color: ${linkColor};
  }
`;

export const StyledSubmitButton = styled.button`
  display: block;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 9px 18px;
  width: 100%;
  border: none;
  border-radius: 25px;
  background: #3194d0;
  color: #fff;
  font-size: 18px;
  outline: none;
  cursor: pointer;
`;