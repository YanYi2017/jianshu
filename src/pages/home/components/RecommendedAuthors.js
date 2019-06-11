import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { RecommendedAuthorsWrapper } from '../style';

class RecommendedAuthors extends PureComponent {
  render() {
    return (
      <RecommendedAuthorsWrapper>
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
                <Link to={`/author/${item.get('slug')}`} className="avatar">
                  <img src={item.get('avatar_source')} alt={item.get('nickname')} />
                </Link>
                <a className="follow">
                  <span>+</span>
                  关注
                </a>
                <Link to={`/author/${item.get('slug')}`} className="name">{item.get('nickname')}</Link>
                <p>写了{(item.get('total_wordage') / 1000).toFixed(1)}k字 · {(item.get('total_likes_count') / 100).toFixed(1)}k喜欢</p>
              </li>
            );
          }) }
        </ul>
        <Link to={'/recommendations/users'} className="find-more">查看全部 ></Link>
      </RecommendedAuthorsWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  recommendedAuthors: state.getIn(['homeReducer', 'recommendedAuthors'])
});

export default connect(mapStateToProps, null)(RecommendedAuthors);