import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import styled from 'styled-components';

import Badge from './Badge';
import Avatar from './Avatar';
import Button from './Button';

import theme from 'styled-theming';
import { ON, OFF } from '../../../common/constants';

const color = theme('mode', {
  [ON]: '#c8c8c8',
  [OFF]: '#333'
});

const borderColor = theme('mode', {
  [ON]: '#2f2f2f',
  [OFF]: '#dcdcdc'
});

const Wrapper = styled.div`
  padding: 20px;
  background: hsla(0,0%,71%,.1);
  border: 1px solid ${borderColor};
  border-radius: 4px;
  font-size: 12px;
`;

const Inner = styled.div`
  display: flex;
  min-height: 27px;
`;

const Info = styled.div`
  flex-grow: 1;
  margin: 6px 0 0 10px;
  a {
    vertical-align: middle;
    font-size: 17px;
    margin-right: 3px;
    color: ${color};
  }
  img {
    vertical-align: middle;
    width: 20px;
    height: 20px;
  }
  p {
    margin-top: 6px;
    font-size: 12px;
    color: #969696;
  }
`;

const FollowButton = styled(Button)`
  margin-top: 5px;
  width: 100px;
  border-radius: 40px;
  .plus {
    margin-right: 2px;
    font-size: 20px;
  }
`;

function FollowDetail({author}) {
  if (author && author.size > 0) {
    return (
      <Wrapper>
        <Inner className="dib_vm">
          <Avatar href={author.get('authorURL')} imgSrc={author.get('avatarURL')} imgAlt="头像" />
          <Info>
            <Link to={author.get('authorURL')}>{author.get('nickName')}</Link>
            <Badge tip={author.get('badgeIconTitle')}>
              <img src={author.get('badgeIconURL')} alt={author.get('badgeIconTitle')} />
            </Badge>
            <p>写了 {author.get('totalWordCount')} 字，被 {author.get('followerCount')} 人关注，获得了 {author.get('totalLikeCount')} 个喜欢</p>
          </Info>
          <FollowButton type="button">
            <span className="plus">+</span>
            <span>关注</span>
          </FollowButton>
        </Inner>
      </Wrapper>
    );
  } else {
    return null;
  }
}

FollowDetail.propTypes = {
  author: PropTypes.instanceOf(Immutable.Map).isRequired
};

export default FollowDetail;