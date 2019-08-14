import styled from 'styled-components';

export const StyledVerificationInput = styled.div`
  input {
    padding-right: 115px;
  }
`;

export const StyledVerificationButton = styled.button`
  position: absolute;
  margin-top: 8px; margin-left: -105px;
  width: 100px; height: 36px;
  color: #fff;
  outline: none;
  cursor: pointer;
  background: #42c02e;
  border: none;
  border-radius: 20px;
  opacity: ${props => props.disabled && '.5'}
  pointer-events: ${props => props.disabled && 'none'}
`;

export const StyledSubmitButton = styled.button`
  display: block;
  margin-top: 20px;
  margin-bottom: 20p;
  padding: 9px 18px;
  width: 100%;
  border: none;
  border-radius: 25px;
  background: #42c02e;
  color: #fff;
  font-size: 18px;
  outline: none;
  cursor: pointer;
`;