import React from 'react';
import { StyledRight } from './style';
import { Board, RecommendedAuthors } from '../components';

function Right() {
  return (
    <StyledRight>
      <Board />
      <RecommendedAuthors />
    </StyledRight>
  );
}

export default Right;