import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { actionCreators } from './store';
import Author from './components/author';
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
  img {
    width: 100%;
    padding-bottom: 25px;
    color: ${color};
  }
  p {
    margin-bottom: 25px;
    line-height: 1.7;
    color: ${color};
  }
`;

class Post extends PureComponent {
  render() {
    const { title, content } = this.props;
    return (
      <div>
        <PostWrapper>
          <div>
            <TitleWrapper>{title}</TitleWrapper>
            <Author />
            <ContentWrapper dangerouslySetInnerHTML={{ __html: content }} />
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
  content: state.getIn(['postReducer', 'content'])
});

const mapDispatchToProps = (dispatch) => ({
  getPost(id) {
    dispatch(actionCreators.getPost(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Post));