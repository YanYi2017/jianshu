import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { actionCreators } from '../store';
import { NewComment, CommentList } from '../components';

const Wrapper = styled.div`
  margin-top: 20px;
`;

function Comment({ loginStatus, comments, getComments }) {
  return (
    <Wrapper>
      <NewComment loginStatus={loginStatus} />
      <CommentList comments={comments} getComments={getComments} />
    </Wrapper>
  );
}

const mapStateToProps = state => ({
  loginStatus: state.getIn(['loginReducer', 'loginStatus']),
  comments: state.getIn(['postReducer', 'comments'])
});

const mapDispatchToProps = dispatch => ({
  getComments() {
    dispatch(actionCreators.getComments());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Comment);