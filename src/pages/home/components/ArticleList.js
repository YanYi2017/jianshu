import React from 'react';
import { connect } from 'react-redux';

import { actionCreators } from '../store';

import { ArticleListWraper, AddMore } from '../style';

const ArticleList = (props) => {
  const { articleList, articlePage, getMoreList } = props;
  return (
    <ArticleListWraper>
      {articleList.map((item, index) => {
        return (
          <li key={index}>
            {
              item.get('imgURL') ? (
                <a href={item.get('href')} className="title">
                  <img src={item.get('imgURL')} alt={item.get('title')} />
                </a>
              ) : ''
            }
            <div>
              <a href={item.get('href')} className="title" target="_blank" rel="noopener noreferrer">{item.get('title')}</a>
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
                <a href={item.get('authorURL')} target="_blank" rel="noopener noreferrer">{item.get('nickname')}</a>
                <a href={item.get('commentsURL')} target="_blank" rel="noopener noreferrer">
                  <span className="iconfont">&#xe609;</span>
                  <span> {item.get('comments')} </span>
                </a>
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
    </ArticleListWraper>
  );
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