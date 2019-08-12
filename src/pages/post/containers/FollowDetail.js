import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import styled from 'styled-components';

import { Badge } from '../components';

const Wrapper = styled.div`
  padding: 20px;
  background: hsla(0,0%,71%,.1);
  border: 1px solid #e1e1e1;
  border-radius: 4px;
  font-size: 12px;
`;

const Inner = styled.div`
  display: flex;
  min-height: 27px;
`;

const Avata = styled(Link)`
  display: inline-block;
  margin-right: 10px;
  width: 48px;
  height: 48px;
  img {
    width: 100%;
    height: 100%;
    border: 1px solid #ddd;
    border-radius: 50%;
  }
`;

const Info = styled.div`
  flex-grow: 1;
  margin-top: 6px;
  a {
    vertical-align: middle;
    font-size: 17px;
    margin-right: 3px;
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

const FollowButton = styled.button`
  float: right;
  margin-top: 5px;
  width: 100px;
  background: #42c02e;
  color: #fff;
  font-size: 16px;
  border-radius: 40px;
  padding: 8px 0;
  :hover {
    background: #3db922;
  }
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
          <Avata to={author.get('authorURL')}>
            <img src={author.get('avatarURL')} alt="头像" />
          </Avata>
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