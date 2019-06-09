import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';

import Carousel from './components/Carousel';
import PopularTopics from './components/PopularTopics';
import ArticleList from './components/ArticleList';
import Board from './components/Board';
import RecommendedAuthors from './components/RecommendedAuthors';

import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style';

class Home extends PureComponent {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <Carousel />
          <PopularTopics />
          <ArticleList />
        </HomeLeft>
        <HomeRight>
          <Board />
          <RecommendedAuthors />
        </HomeRight>
        {
          this.props.showBackTop ? (
            <BackTop onClick={this.handleScrollTop}>
              <span className="iconfont">&#xe671;</span>
            </BackTop>
          ) : null
        }
      </HomeWrapper>
    );
  }
  componentDidMount() {
    this.props.changeHomeData();
    window.addEventListener('scroll', this.props.changeShowBackTop)
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeShowBackTop)
  }
  handleScrollTop() {
    window.scrollTo(0, 0);
  }
}

const mapStateToProps = (state) => ({
  showBackTop: state.getIn(['homeReducer', 'showBackTop'])
});

const mapDispatchToProps = (dispatch) => ({
  changeHomeData() {
    dispatch(actionCreators.getHomeInfo());
  },
  changeShowBackTop() {
    if (document.documentElement.scrollTop > 300) {
      dispatch(actionCreators.toggleTopShow(true));
    } else {
      dispatch(actionCreators.toggleTopShow(false));
    }
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);