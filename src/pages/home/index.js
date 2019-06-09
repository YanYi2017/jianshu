import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';

import Carousel from './components/Carousel';
import PopularTopics from './components/PopularTopics';
import ArticleList from './components/ArticleList';
import Board from './components/Board';
import RecommendedAuthors from './components/RecommendedAuthors';

import { HomeWraper, HomeLeft, HomeRight } from './style';

class Home extends Component {
  render() {
    return (
      <HomeWraper>
        <HomeLeft>
          <Carousel />
          <PopularTopics />
          <ArticleList />
        </HomeLeft>
        <HomeRight>
          <Board />
          <RecommendedAuthors />
        </HomeRight>
      </HomeWraper>
    );
  }
  componentDidMount() {
    this.props.changeHomeData();
  }
}

const mapDispatchToProps = (dispatch) => ({
  changeHomeData() {
    const action = actionCreators.getHomeInfo();
    dispatch(action);
  }
});

export default connect(null, mapDispatchToProps)(Home);