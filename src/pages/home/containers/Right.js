import React from 'react';
import { Board, RecommendedAuthors } from '../components';

function Right() {
  return (
    <div className="col-7 col-offset-1">
      <Board />
      <RecommendedAuthors />
    </div>
  );
}

export default Right;