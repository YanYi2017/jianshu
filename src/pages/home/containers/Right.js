import React from 'react';
import { Board, RecommendedAuthors } from '../components';

function Right({ className }) {
  return (
    <div className={className}>
      <Board />
      <RecommendedAuthors />
    </div>
  );
}

export default Right;