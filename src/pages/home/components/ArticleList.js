import React from 'react';
import Article from './Article';
import { AddMore } from './style';

function ArticleList({ articleList, articlePage, getMoreList }) {
  return (
    <ul>
      {articleList.map((item) => <Article item={item} key={item.get('id')}/>)}
      <AddMore onClick={() => getMoreList(articlePage)}>阅读更多</AddMore>
    </ul>
  );
}
export default ArticleList;