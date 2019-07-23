import React from 'react';
import Immutable from 'immutable';
import PropTypes from 'prop-types';

import Article from './Article';
import AddMore from './AddMore';
import LoadingArticleList from './LoadingArticleList';

function ArticleList({ articleList, loading, getMoreList }) {
  return (
    <ul>
      {articleList.map((item) => <Article item={item} key={item.get('id')}/>)}
      {loading ? <LoadingArticleList /> : <AddMore getMoreList={getMoreList} />}
    </ul>
  );
}

ArticleList.propTypes = {
  articleList: PropTypes.instanceOf(Immutable.List).isRequired,
  loading: PropTypes.bool.isRequired,
  getMoreList: PropTypes.func.isRequired
};

export default ArticleList;