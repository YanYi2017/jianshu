import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Immutable from 'immutable';

import CommentItem from './CommentItem';
import CommentsLoading from './CommentsLoading';
import Pagination from '../../../util/Pagination';

import theme from 'styled-theming';
import { ON, OFF } from '../../../common/constants';

const color = theme('mode', {
  [ON]: '#c8c8c8',
  [OFF]: '#333'
});

const borderColor = theme('mode', {
  [ON]: '#2f2f2f',
  [OFF]: '#ddd'
});

const hoveredBackgroundColor = theme('mode', {
  [ON]: 'rgba(0,0,0,.05)',
  [OFF]: '#eee'
});

const Wrapper = styled.div`
  margin-top: 30px;
`;

const TopTitle = styled.div`
  span {
    font-size: 17px;
    font-weight: 700;
    margin-right: 10px;
    color: ${color};
  }
  .btn {
    font-size: 12px;
    color: #969696;
  }
  .author-only {
    font-weight: 700;
    border: 1px solid ${borderColor};
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
      color: ${color};
    }
  }
  .ascending {
    padding-right: 0;
  }
`;

const List = styled.ul`
  margin-top: 30px;
`;

const StyledPagination = styled(Pagination)`
  button {
    border-color: ${borderColor};
    :hover {
      background: ${hoveredBackgroundColor};
    }
  }
`;

function CommentList({ loading, comments, onChange }) {
  const [onlyAuthor, setOnlyAuthor] = useState(false);
  const [orderBy, setOrderBy] = useState('desc');
  const [currentPageNum, setCurrentPageNum] = useState(comments.get('page'));

  const totalCommentNum = comments.get('total_comments');
  const totalPageNum = comments.get('total_pages');
  const list = comments.get('comments').toJS();
  
  const toggleOnlyAuthor = () => setOnlyAuthor(prev => !prev);
  const setAscOrder = () => {
    setCurrentPageNum(1);
    setOrderBy('asc')
  };
  const setDescOrder = () => {
    setCurrentPageNum(1);
    setOrderBy('desc')
  };
  
  useEffect(() => {
    onChange(onlyAuthor, orderBy, currentPageNum);
  }, [onlyAuthor, orderBy, currentPageNum, onChange]);

  return (
    <Wrapper>
      <TopTitle>
        <span>{totalCommentNum}条评论</span>
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

      {
        loading
          ? (<CommentsLoading />) 
          : (
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
          )
      }
      
      <StyledPagination
        currentPageNum={currentPageNum}
        totalPageNum={totalPageNum}
        onChange={i => setCurrentPageNum(i)} />
    </Wrapper>
  );
}

CommentList.propTypes = {
  comments: PropTypes.instanceOf(Immutable.Map).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CommentList;