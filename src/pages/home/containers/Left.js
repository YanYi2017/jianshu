import React from 'react';
import { ArticleList } from '../components';

function Left({ className }) {
  return (
    <div className={className}>
      <ArticleList />
    </div>
  );
}

export default Left;