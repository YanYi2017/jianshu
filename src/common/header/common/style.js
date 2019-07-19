import styled from 'styled-components';

export const StyledSwitchButton = styled.div`
  & > button {
    padding: 13px;
    width: 50%;
    border: 1px solid #e5e5e5;
    border-left: none;
    color: inherit;
    font: inherit;
  }
  & > button:first-child {
    padding-left: 17px;
    border-left: 1px solid #e5e5e5;
    border-radius: 20px 0 0 20px;
  }
  & > button:last-child {
    padding-right: 17px;
    border-radius: 0 20px 20px 0;
  }
`;