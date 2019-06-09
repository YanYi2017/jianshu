import React, { Component } from 'react';
import { connect } from 'react-redux';

import { RecommendedAuthorsWraper } from '../style';

class RecommendedAuthors extends Component {
  render() {
    return (
      <RecommendedAuthorsWraper>
        <div className="title">
          <span>推荐作者</span>
          <a className="page-change">
            <span className='iconfont'>&#xe61b;</span>
            <span>换一批</span>
          </a>
        </div>
        <ul>
          { this.props.recommendedAuthors.map((item) => {
            return (
              <li key={item.get('id')}>
                <a className="avatar" href={`/u/${item.get('slug')}?utm_source=desktop&utm_medium=index-users`} target="_blank" rel="noopener noreferrer">
                  <img src={item.get('avatar_source')} alt={item.get('nickname')} />
                </a>
                <a className="follow">
                  <span>+</span>
                  关注
                </a>
                <a className="name" href={`/u/${item.get('slug')}?utm_source=desktop&utm_medium=index-users`} target="_blank" rel="noopener noreferrer">{item.get('nickname')}</a>
                <p>写了{(item.get('total_wordage') / 1000).toFixed(1)}k字 · {(item.get('total_likes_count') / 100).toFixed(1)}k喜欢</p>
              </li>
            );
          }) }
        </ul>
        <a href="/recommendations/users?utm_source=desktop&utm_medium=index-users" className="find-more">查看全部 ></a>
      </RecommendedAuthorsWraper>
    );
  }
}

const mapStateToProps = (state) => ({
  recommendedAuthors: state.getIn(['homeReducer', 'recommendedAuthors'])
});

export default connect(mapStateToProps, null)(RecommendedAuthors);