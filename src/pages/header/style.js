import styled from 'styled-components';
import { borderColor } from '../../common/style';

export const HeaderWrapper = styled.header`
  position: fixed;
  left: 0; right: 0;
  z-index: 999;
  height: 58px;
  border-bottom: 1px solid ${borderColor};
  background: inherit;
`;

export const WidthLimit = styled.div`
  min-width: 768px; max-width: 1440px;
  height: 100%;
  margin: 0 auto;
  background: inherit;
`;