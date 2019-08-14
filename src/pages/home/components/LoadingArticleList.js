import React from 'react';
import { StyledLoadingArticleList } from './style';

function LoadingArticleList() {
  return (
    <StyledLoadingArticleList>
      <div className="img"></div>
      <div className="content">
        <div className="title"></div>
        <div className="text"></div>
        <div className="text animation-delay"></div>
      </div>
      <div className="meta">
        <span className="read"></span>
        <span className="iconfont ic-list-comments">&#xe609;</span>
        <span className="small"></span>
        <span className="iconfont ic-list-like">&#xe622;</span>
        <span className="small"></span>
      </div>
    </StyledLoadingArticleList>
  );
}

export default LoadingArticleList;