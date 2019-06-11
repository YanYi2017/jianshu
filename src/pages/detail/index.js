import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { actionCreators } from './store';

import Author from './components/Author';

import {
  DetailWrapper,
  ArticleWrapper,
  Header,
  Content
} from './style';

class Detail extends Component {
  render() {
    const { title, content } = this.props;
    return (
      <DetailWrapper>
        <ArticleWrapper>
          <Header>
            <h1>{title}</h1>
          </Header>
          <Author />
          <Content dangerouslySetInnerHTML={{ __html: content }} />
        </ArticleWrapper>
      </DetailWrapper>
    );
  }

  componentDidMount() {
    this.props.getDetail(this.props.match.params.id);
  }
}

const mapStateToProps = (state) => ({
  title: state.getIn(['detailReducer', 'title']),
  content: state.getIn(['detailReducer', 'content'])
});

const mapDispatchToProps = (dispatch) => ({
  getDetail(id) {
    dispatch(actionCreators.getDetail(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Detail);