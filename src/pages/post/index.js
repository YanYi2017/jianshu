import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { actionCreators } from './store';
import { Author } from './components';
import { Support, FollowDetail } from './containers';

import { color } from '../../common/style';

const PostWrapper = styled.div`
  width: 620px;
  min-height: 300px;
  margin: 0 auto;
  padding-top: 110px;
  padding-bottom: 40px;
`;

const TitleWrapper = styled.h1`
  font-size: 34px; font-weight: 700;
  line-height: 1.3;
  color: ${color};
`;

const ContentWrapper = styled.main`
  .image-package {
    padding-bottom: 25px;
    width: 700px;
    margin-left: -40px;
    text-align: center;
  }
  .image-container {
    position: relative;
    background-color: #eee;
    transition: background-color .1s linear;
    margin: 0 auto;
  }
  .image-view {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .image-view img {
    display: block;
    transition: all .15s linear;
    opacity: 1;
    max-width: 100%;
    height: auto;
    border: 0;
  }
  a {
    color: #3194d0;
  }
  a:hover {
    text-decoration: underline;
  }
  p {
    margin-bottom: 25px;
    line-height: 1.7;
    color: ${color};
  }
`;

class Post extends PureComponent {
  render() {
    const { title, author, content } = this.props;
    return (
      <div>
        <PostWrapper>
          <div>
            <TitleWrapper>{title}</TitleWrapper>
            <Author author={author} />
            <ContentWrapper dangerouslySetInnerHTML={{ __html: content }} />
            <Support />
            <FollowDetail author={author} />
          </div>
        </PostWrapper>
      </div>
    );
  }

  componentDidMount() {
    this.props.getPost(this.props.match.params.id);
  }
}

const mapStateToProps = (state) => ({
  title: state.getIn(['postReducer', 'title']),
  author: state.getIn(['postReducer', 'author']),
  content: state.getIn(['postReducer', 'content'])
});

const mapDispatchToProps = (dispatch) => ({
  getPost(id) {
    dispatch(actionCreators.getPost(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Post));