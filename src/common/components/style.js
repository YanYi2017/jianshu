import styled from 'styled-components';

import { color } from '../style';

export const StyledSpinButton = styled.button`
  float: right;
  border: none;
  font-size: 13px;
  color: #969696;
  :hover {
    color: ${color};
  }
  .ic-search-change {
    display: inline-block;
    margin-right: 4px;
    transition: all 0.2s ease;
  }
`;