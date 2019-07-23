import React from 'react';
import Immutable from 'immutable';
import PropTypes from 'prop-types';

import Article from './Article';
import AddMore from './AddMore';

function ArticleList({ articleList, getMoreList }) {
  return (
    <ul>
      {articleList.map((item) => <Article item={item} key={item.get('id')}/>)}
      <AddMore getMoreList={getMoreList} />
    </ul>
  );
}

ArticleList.propTypes = {
  articleList: PropTypes.instanceOf(Immutable.List).isRequired,
  getMoreList: PropTypes.func.isRequired
};

export default ArticleList;