import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import { actionCreators } from '../store';

import { ArticleListWrapper, AddMore } from '../style';

class ArticleList extends PureComponent {
  render() {
    const { articleList, articlePage, getMoreList } = this.props;
    return (
      <ArticleListWrapper>
        {articleList.map((item, index) => {
          return (
            <li key={index}>
              {
                item.get('imgURL') ? (
                  <Link to={`/detail/${item.get('id')}`}>
                    <img src={item.get('imgURL')} alt={item.get('title')} />
                  </Link>
                ) : ''
              }
              <div>
                <Link to={`/detail/${item.get('id')}`} className="title">{item.get('title')}</Link>
                <p className="abstract">{item.get('abstract')}</p>
  
                <div className="meta">
                  {
                    item.get('diamond') ? (
                      <span className="jsd-meta">
                        <span className="iconfont">&#xe600;</span>
                        <span> {item.get('diamond')} </span>
                      </span>
                    ) : ''
                  }
                  <Link to={`/author/${item.get('authorID')}`}>{item.get('nickname')}</Link>
                  <Link to={`/detail/${item.get('id') + '#comments'}`}>
                    <span className="iconfont">&#xe609;</span>
                    <span> {item.get('comments')} </span>
                  </Link>
                  
                  <span>
                    <span className="iconfont">&#xe622;</span>
                    <span> {item.get('like')} </span>
                  </span>
                  {
                    item.get('reward') ? (
                      <span>
                        <span className="iconfont">&#xe601;</span>
                        <span> 1 </span>
                      </span>
                    ) : ''
                  }
                </div>
              </div>
            </li>
          );
        })}
        <AddMore onClick={() => getMoreList(articlePage)}>阅读更多</AddMore>
      </ArticleListWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  articleList: state.getIn(['homeReducer', 'articleList']),
  articlePage: state.getIn(['homeReducer', 'articlePage']),
});

const mapDispatchToprops = (dispatch) => ({
  getMoreList(articlePage) {
    const action = actionCreators.getMoreList(articlePage);
    dispatch(action);
  }
});

export default connect(mapStateToProps, mapDispatchToprops)(ArticleList);