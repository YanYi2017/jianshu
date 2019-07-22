import React from 'react';
import { connect } from 'react-redux';

import { actionCreators } from '../store';
import { ArticleList } from '../components';

function Left({ className, articleList, articlePage, getMoreList }) {
  return (
    <div className={className}>
      <ArticleList
        articleList={articleList}
        articlePage={articlePage}
        getMoreList={getMoreList}
      />
    </div>
  );
}

const mapStateToProps = (state) => ({
  articleList: state.getIn(['homeReducer', 'articleList']),
  articlePage: state.getIn(['homeReducer', 'articlePage']),
});

const mapDispatchToprops = (dispatch) => ({
  getMoreList(articlePage) {
    const action = actionCreators.getMoreList(articlePage);
    dispatch(action);
  }
});

export default connect(mapStateToProps, mapDispatchToprops)(Left);