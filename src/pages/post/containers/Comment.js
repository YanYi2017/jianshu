import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { NewComment, CommentList } from '../components';

const Wrapper = styled.div`
  margin-top: 20px;
`;

function Comment({ loginStatus }) {
  return (
    <Wrapper>
      <NewComment loginStatus={loginStatus} />
      <CommentList />
    </Wrapper>
  );
}

const mapStateToProps = state => ({
  loginStatus: state.getIn(['loginReducer', 'loginStatus'])
});

export default connect(mapStateToProps)(Comment);