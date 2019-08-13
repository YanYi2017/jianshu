import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import _util from '../../../util';
import Avatar from './Avatar';

const Wrapper = styled.li`
  padding: 20px 0 30px 0;
  border-bottom: 1px solid #f0f0f0;
`;

const StyledAvatar = styled(Avatar)`
  width: 38px;
  height: 38px;
`;
const Info = styled.div`
  display: inline-block;
  margin-left: 5px;
  line-height: 1.42857;
  vertical-align: top;
  a {
    font-size: 15px;
  }
  p {
    font-size: 12px;
    color: #969696;
  }
`;

const Content = styled.p`
  margin: 10px 0;
  font-size: 16px;
  line-height: 1.5;
`;

const ToolGroup = styled.div`
  button {
    font-size: 14px;
    border: none;
    color: #969696;
    span {
      vertical-align: middle;
    }
    :hover {
      color: #333;
      .like-btn {
        color: #ec6149;
      }
    }
    .iconfont {
      font-size: 17px;
      font-weight: 600;
      margin-right: 4px;
    }
  }

`;

function CommentItem({ href, imgSrc, nickname, floor, createdTime, content, liked, likedCount }) {
  // 转换日期格式
  const time = _util.convertDateFormat(createdTime);

  return (
    <Wrapper>
      <div>
        <StyledAvatar href={href} imgSrc={imgSrc} imgAlt="头像" />
        <Info>
          <Link to={href}>{nickname}</Link>
          <p>{floor}楼 · {time}</p>
        </Info>
      </div>
      <Content dangerouslySetInnerHTML={{__html: content}} />
      <ToolGroup>
        <button>
          <span className="iconfont like-btn">&#xe60a;</span>
          <span>{likedCount > 0 && `${likedCount}人`}赞</span>
        </button>
        <button>
          <span className="iconfont">&#xe61e;</span>
          <span>回复</span>
        </button>
      </ToolGroup>
    </Wrapper>
  );
}

CommentItem.propTypes = {
  href: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
  floor: PropTypes.number.isRequired,
  createdTime: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  likedCount: PropTypes.number.isRequired
};

export default CommentItem;