import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Avatar from './Avatar';

const Wrapper = styled.form`
  display: flex;
`;

const StyledAvatar = styled(Avatar)`
  width: 38px;
  height: 38px;
`;

const Container = styled.div`
  flex-grow: 1;
  margin-left: 10px;
`;

const CommentArea = styled.textarea`
  width: 100%;
  height: 80px;
  padding: 10px 15px;
  font-size: 13px;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  background: hsla(0, 0%, 71%, .1);
  outline: none;
  resize: none;
`;

const SigninArea = styled(CommentArea)`
  text-align: center;
  span {
    margin-left: 10px;
  }
`;

const LoginButton = styled(Link)`
  display: inline-block;
  width: 78px;
  height: 36px;
  line-height: 36px;
  border-radius: 20px;
  font-size: 16px;
  color: #fff;
  background: #3194d0;
  :hover {
    background: #187cb7;
  }
`;

function NewComment({ loginStatus }) {
  const [comment, setComment] = useState('');

  return (
    <Wrapper>
      <StyledAvatar href="#" imgSrc="//cdn2.jianshu.io/assets/default_avatar/avatar_default-78d4d1f68984cd6d4379508dd94b4210.png" imgAlt="默认头像" />

      <Container>
        {
          loginStatus
            ? (
              <CommentArea placeholder="写下你的评论" value={comment} onChange={e => setComment(e.target.value)} />
            )
            : (
              <SigninArea as="div" className="dib_vm">
                <LoginButton className="vm" to="/login">登录</LoginButton>
                <span className="vm">后发表评论</span>
              </SigninArea>
            )
        }
      </Container>
    </Wrapper>
  );
}

export default NewComment;