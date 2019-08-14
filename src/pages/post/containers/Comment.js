import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { actionCreators } from '../store';
import { NewComment, CommentList } from '../components';

const Wrapper = styled.div`
  margin-top: 20px;
`;

function Comment({ loginStatus, loading, comments, getComments }) {
  useEffect(getComments, []);

  return (
    <Wrapper>
      <NewComment loginStatus={loginStatus} />
      {
        comments.size > 0 && <CommentList loading={loading} comments={comments} onChange={getComments} />
      }
    </Wrapper>
  );
}

Comment.propTypes = {
  loginStatus: PropTypes.bool.isRequired,
  comments: PropTypes.instanceOf(Immutable.Map).isRequired,
  getComments: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  loginStatus: state.getIn(['loginReducer', 'loginStatus']),
  comments: state.getIn(['postReducer', 'comments']),
  loading: state.getIn(['postReducer', 'loadingComments'])
});

const mapDispatchToProps = dispatch => ({
  getComments(authorOnly, orderBy, currentPageNum) {
    dispatch(actionCreators.getComments(authorOnly, orderBy, currentPageNum));
    dispatch(actionCreators.toggleLoadingComments(true));   // 显示评论的loading占位内容
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Comment);