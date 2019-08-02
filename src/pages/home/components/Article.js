import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { StyledArticle } from './style';

function Article({ item }) {
  return (
    <StyledArticle>
      {
        item.get('imgURL') &&
        <Link to={item.get('href')}>
          <img src={item.get('imgURL')} alt={item.get('title')} />
        </Link>
      }
      <div>
        <Link to={item.get('href')} className="title">{item.get('title')}</Link>
        <p className="abstract">{item.get('abstract')}</p>
        <div className="meta">
          {
            item.get('diamond') &&
            <span className="jsd-meta">
              <span className="iconfont">&#xe600;</span>
              <span>{item.get('diamond')}</span>
            </span>
          }
          <Link to={`/author/${item.get('authorID')}`}>{item.get('nickname')}</Link>
          <Link to={item.get('commentsURL')}>
            <span className="iconfont">&#xe609;</span>
            <span>{item.get('comments')}</span>
          </Link>
          <span>
            <span className="iconfont">&#xe622;</span>
            <span>{item.get('like')}</span>
          </span>
          {
            item.get('reward') &&
            <span>
              <span className="iconfont">&#xe601;</span>
              <span>{item.get('reward')}</span>
            </span>
          }
        </div>
      </div>
    </StyledArticle>
  );
}

Article.propTypes = {
  item: PropTypes.object.isRequired
};

export default Article;