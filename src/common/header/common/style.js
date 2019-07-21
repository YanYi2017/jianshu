import styled from 'styled-components';

export const StyledSwitchButton = styled.div`
  & > button { border-left: none; width: 50%; };
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

export const StyledButton = styled.button`
  padding: 13px;
  border: 1px solid #e5e5e5;
  user-select: none;
  color: inherit;
  font: inherit;
  
  &.active {
    color: #fff;
    background-color: #6dacf4;
    border-color: #6dacf4;
    box-shadow: inset 0 0 6px rgba(0,0,0,.1);
  }
`;