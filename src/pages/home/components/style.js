import styled from 'styled-components';
import { color, borderColor, boxBackgroundColor } from '../../../common/style';

export const StyledBackToTop = styled.button`
  position: fixed;
  right: 40px; bottom: 40px;
  width: 52px; height: 52px;
  outline: none;
  padding: 0;
  z-index: 1040;
  cursor: pointer;
  color: ${color};
  border: 1px solid ${borderColor};
  background: ${boxBackgroundColor};
`;