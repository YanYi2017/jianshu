import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Immutable from 'immutable';

import { color, borderColor } from '../../../common/style';

const Wrapper = styled.div`
  margin: 30px 0 40px 0;
`;

const AvatarWrapper = styled(Link)`
  display: inline-block;
  vertical-align: middle;
  width: 48px; height: 48px;
  
  img {
    width: 100%; height: 100%;
    border: 1px solid ${borderColor};
    border-radius: 50%;
  }
`;

const InfoWrapper = styled.div`
  display: inline-block;
  vertical-align: middle;
  margin-left: 10px;
`;

const NickNameWrapper = styled(Link)`
  margin-right: 7px;
  vertical-align: middle;
  color: ${color};
`;

const BadgeWrapper = styled.span`
  display: inline-block;
  width:20px;
  height:20px;
  vertical-align: middle;
  margin-right: 7px;
  color: ${color};
  img {
    width: 100%;
    height: 100%;
  }
  .hover-show {
    display: none;
  }
  &:hover .hover-show {
    display: block;
  }
`;

const Tooltip = styled.div`
  position: absolute;
  font-size: 14px;
  padding: 5px 10px;
  margin-top: -65px;
  margin-left: -35px;
  line-height: 1.42857;
`;

const TooltipInner = styled.div`
  padding: 5px 10px;
  color: #fff;
  background: #000;
  border-radius: 4px;
`;

const TooltipArrow = styled.div`
  margin-left: 30px;
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-bottom-width: 0;
  border-top-color: #000;
`;

const ButtonWrapper = styled.button`
  background: #42c02e;
  border-radius: 40px;
  border: none;
  color: #fff;
  font-size: 12px;
  cursor: pointer;

  span {
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
        <AvatarWrapper to={author.get('authorURL')}>
          <img src={author.get('avatarURL')} alt="avatar" />
        </AvatarWrapper>
        <InfoWrapper>
          <NickNameWrapper to={author.get('authorURL')}>{author.get('nickName')}</NickNameWrapper>
          <BadgeWrapper>
            <img src={author.get('badgeIconURL')} alt={author.get('badgeIconTitle')} />
            <Tooltip className="hover-show">
              <TooltipInner>{author.get('badgeIconTitle')}</TooltipInner>
              <TooltipArrow></TooltipArrow>
            </Tooltip>
          </BadgeWrapper>
          <ButtonWrapper>
            <span>+</span>关注
          </ButtonWrapper>
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