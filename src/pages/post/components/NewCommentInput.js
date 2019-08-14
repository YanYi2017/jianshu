import React, { useState } from 'react';
import styled from 'styled-components';
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

const CommentArea = styled.textarea`
  width: 100%;
  height: 80px;
  padding: 10px 15px;
  font-size: 13px;
  border: 1px solid ${borderColor};
  border-radius: 4px;
  color: ${color};
  background: hsla(0, 0%, 71%, .1);
  outline: none;
  resize: none;
`;

const WriteFunctionBlock = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  color: #969696;
`;

const EmojiButton = styled.button`
  border: none;
  :hover {
    color: #2f2f2f;
  }
  span.iconfont {
    display: inline-block;
    font-size: 20px;
  }
`;

const Hint = styled.span`
  flex-grow: 1;
  margin-left: 20px;
  font-size: 13px;
`;

const CancleButton = styled.button`
  font-size: 16px;
  border: none;
  margin-right: 30px;
  :hover {
    color: #2f2f2f;
  }
`;

function NewCommentInput() {
  const [comment, setComment] = useState('');
  const [show, setShow] = useState(false);

  const showWriteFunctionBlock = () => setShow(true);
  const hideWriteFunctionBlock = () => setShow(false);

  return (
    <>
      <CommentArea
        placeholder="写下你的评论"
        value={comment}
        onChange={e => setComment(e.target.value)}
        onFocus={showWriteFunctionBlock}
      />
      {
        show && (
          <WriteFunctionBlock>
            <EmojiButton type="button">
              <span className="iconfont">&#xe674;</span>
            </EmojiButton>
            <Hint>Ctrl+Enter 发表</Hint>
            <CancleButton onClick={hideWriteFunctionBlock}>取消</CancleButton>
            <Button>发送</Button>
          </WriteFunctionBlock>
        )
      }
    </>
  );
}

export default NewCommentInput;