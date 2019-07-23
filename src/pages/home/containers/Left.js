import React from 'react';
import { connect } from 'react-redux';

import { actionCreators } from '../store';
import { ArticleList } from '../components';

function Left({ className, articleList, getMoreList }) {
  return (
    <div className={className}>
      <ArticleList
        articleList={articleList}
        getMoreList={getMoreList}
      />
    </div>
  );
}

const mapStateToProps = (state) => ({
  articleList: state.getIn(['homeReducer', 'articleList'])
});

const mapDispatchToprops = (dispatch) => ({
  getMoreList() {
    dispatch(actionCreators.getMoreList());
  }
});

export default connect(mapStateToProps, mapDispatchToprops)(Left);