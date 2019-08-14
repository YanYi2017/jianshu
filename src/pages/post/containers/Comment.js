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

function Comment({ loginStatus, comments, getComments }) {
  useEffect(getComments, []);

  return (
    <Wrapper>
      <NewComment loginStatus={loginStatus} />
      {
        comments.size > 0 && <CommentList comments={comments} onChange={getComments} />
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
  comments: state.getIn(['postReducer', 'comments'])
});

const mapDispatchToProps = dispatch => ({
  getComments(authorOnly, orderBy, currentPageNum) {
    dispatch(actionCreators.getComments(authorOnly, orderBy, currentPageNum));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Comment);