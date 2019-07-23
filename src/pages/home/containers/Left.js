import React from 'react';
import { connect } from 'react-redux';

import { actionCreators } from '../store';
import { ArticleList } from '../components';

function Left({ articleList, loading, getMoreList }) {
  return (
    <div className="col-16">
      <ArticleList
        articleList={articleList}
        loading={loading}
        getMoreList={getMoreList}
      />
    </div>
  );
}

const mapStateToProps = (state) => ({
  articleList: state.getIn(['homeReducer', 'articleList']),
  loading: state.getIn(['homeReducer', 'loading'])
});

const mapDispatchToprops = (dispatch) => ({
  getMoreList() {
    dispatch(actionCreators.toggleLoading(true));
    dispatch(actionCreators.getMoreList());
  }
});

export default connect(mapStateToProps, mapDispatchToprops)(Left);