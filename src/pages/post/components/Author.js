import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Immutable from 'immutable';

import Badge from './Badge';
import Avatar from './Avatar';
import Button from './Button';
import { color } from '../../../common/style';

const Wrapper = styled.div`
  display: flex;
  margin: 30px 0 40px 0;
`;

const InfoWrapper = styled.div`
  flex-grow: 1;
  margin:5px 0 0 10px;
`;

const NickNameWrapper = styled(Link)`
  margin-right: 7px;
  vertical-align: middle;
  color: ${color};
`;

const FollowButton = styled(Button)`
  width: 52px;
  height: 20px;
  font-size: 12px;
  cursor: pointer;

  span.plus {
    font-size: 15px;
    margin-right: 3px;
  }
`;

const MetaWrapper = styled.div`
  margin-top:7px;
  font-size: 12px;
  color: #969696;
  & > span {
    margin-right: 8px;
  }
  .jsd-meta {
    color:#ea6f5a;
  }
`;

function Author({ author }) {
  if (!author || author.size === 0) {
    return null;
  } else {
    return (
      <Wrapper>
        <Avatar href={author.get('authorURL')} imgSrc={author.get('avatarURL')} imgAlt="avatar" />
        <InfoWrapper>
          <NickNameWrapper to={author.get('authorURL')}>{author.get('nickName')}</NickNameWrapper>
          <Badge tip={author.get('badgeIconTitle')}>
            <img src={author.get('badgeIconURL')} alt={author.get('badgeIconTitle')} />
          </Badge>
          <FollowButton>
            <span className="plus">+</span>
            <span>关注</span>
          </FollowButton>
          <MetaWrapper className="meta">
            <span className="jsd-meta">
              <span className="iconfont">&#xe600;</span>
              <span>{author.get('diamond')}</span>
            </span>
            <span>{author.get('publishTime')}</span>
            <span>字数 {author.get('wordCount')}</span>
            <span>阅读 {author.get('viewsCount')}</span>
            <span>评论 {author.get('commentsCount')}</span>
            <span>喜欢 {author.get('likeCount')}</span>
            {
              author.get('rewardCount') && <span>赞赏 {author.get('rewardCount')}</span>
            }
          </MetaWrapper>
        </InfoWrapper>
      </Wrapper>
    );
  }
}

Author.propTypes = {
  author: PropTypes.instanceOf(Immutable.Map).isRequired
};

export default Author;