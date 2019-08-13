import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Immutable from 'immutable';

import CommentItem from './CommentItem';

const Wrapper = styled.div`
  margin-top: 30px;
`;

const TopTitle = styled.div`
  span {
    font-size: 17px;
    font-weight: 700;
    margin-right: 10px;
  }
  .btn {
    font-size: 12px;
    color: #969696;
  }
  .author-only {
    font-weight: 700;
    border: 1px solid #e1e1e1;
    border-radius: 12px;
    &.active {
      color: #fff;
      border-color: #ea6f5a;
      background: #ea6f5a;
    }
  }
  .order {
    float: right;
    border: none;
    :hover, &.active {
      color: #2f2f2f;
    }
  }
  .ascending {
    padding-right: 0;
  }
`;

const List = styled.ul`
  margin-top: 30px;
`;

function CommentList({ comments, getComments }) {
  const [onlyAuthor, setOnlyAuthor] = useState(false);
  const [orderBy, setOrderBy] = useState('desc');

  const toggleOnlyAuthor = () => setOnlyAuthor(prev => !prev);
  const setAscOrder = () => setOrderBy('asc');
  const setDescOrder = () => setOrderBy('desc');

  useEffect(getComments, []);

  if (comments.size === 0) {
    return null;
  }
  
  const list = comments.get('comments').toJS();

  return (
    <Wrapper>
      <TopTitle>
        <span>45条评论</span>
        <button
          className={onlyAuthor ? 'btn author-only active' : 'btn author-only'}
          onClick={toggleOnlyAuthor}>
          只看作者
        </button>
        <button
          className={orderBy === 'asc' ? 'btn order ascending active' : 'btn order ascending'}
          onClick={setAscOrder}>
          按时间正序
        </button>
        <button
          className={orderBy === 'desc' ? 'btn order active' : 'btn order'}
          onClick={setDescOrder}>
          按时间倒序
        </button>
      </TopTitle>
      <List>
        {
          list.map(comment => {
            const { user, floor, created_at, compiled_content, liked, likes_count } = comment;
            return (
              <CommentItem
                key={user.slug}
                href={`u/${user.slug}`}
                imgSrc={user.avatar}
                nickname={user.nickname}
                floor={floor}
                createdTime={created_at}
                content={compiled_content}
                liked={liked}
                likedCount={likes_count} />
            );
          })
        }
      </List>
    </Wrapper>
  );
}

CommentList.propTypes = {
  comments: PropTypes.instanceOf(Immutable.Map).isRequired,
  getComments: PropTypes.func.isRequired
};

export default CommentList;