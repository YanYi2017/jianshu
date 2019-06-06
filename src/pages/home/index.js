import React, { Component } from 'react';

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
}

export default Home;