import React, { useState } from 'react';
import styled from 'styled-components';

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

const SubmitButton = styled.button`
  width:78px;
  height: 38px;
  border-radius: 20px;
  border: none;
  font-size: 16px;
  background: #42c02e;
  color: #fff;
  :hover {
    background: #3db922;
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
            <EmojiButton>
              <span className="iconfont">&#xe674;</span>
            </EmojiButton>
            <Hint>Ctrl+Enter 发表</Hint>
            <CancleButton onClick={hideWriteFunctionBlock}>取消</CancleButton>
            <SubmitButton>发送</SubmitButton>
          </WriteFunctionBlock>
        )
      }
    </>
  );
}

export default NewCommentInput;