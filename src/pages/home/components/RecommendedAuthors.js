import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import { Link } from 'react-router-dom';

import { SpinButton } from '../../../common/components';
import { StyledRecommendedAuthors } from './style';

function RecommendedAuthors({ authors, onClick }) {
  return (
    <StyledRecommendedAuthors>
      <div className="title">
        <span>推荐作者</span>
        <SpinButton onClick={onClick} />
      </div>
      <ul>
        {authors.map((item) => {
          return (
            <li key={item.get('id')}>
              <Link to={`/author/${item.get('slug')}`} className="avatar">
                <img src={item.get('avatar_source')} alt={item.get('nickname')} />
              </Link>
              <button className="follow">
                <span>+</span>
                关注
                </button>
              <Link to={`/author/${item.get('slug')}`} className="name">{item.get('nickname')}</Link>
              <p>写了{(item.get('total_wordage') / 1000).toFixed(1)}k字 · {(item.get('total_likes_count') / 100).toFixed(1)}k喜欢</p>
            </li>
          );
        })}
      </ul>
      <Link to={'/recommendations/users'} className="find-more">查看全部 ></Link>
    </StyledRecommendedAuthors>
  );
}

RecommendedAuthors.propTypes = {
  authors: PropTypes.instanceOf(Immutable.List).isRequired,
  onClick: PropTypes.func.isRequired
};

export default RecommendedAuthors;