import React from 'react';
import styled from 'styled-components';

import theme from 'styled-theming';
import { ON, OFF } from '../../../common/constants';

const loadingBackgroundColor = theme('mode', {
  [ON]: '#545454',
  [OFF]: '#eaeaea'
});

const Wrapper = styled.div`
  padding: 20px 0 30px 0;
`;

const User = styled.div`
  margin-bottom: 15px;
`;

const StyledAvatar = styled.span`
  display: inline-block;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: ${loadingBackgroundColor};
`;

const Info = styled.div`
  display: inline-block;
  margin-left: 5px;
  line-height: 1.42857;
  vertical-align: top;
`;

const Nickname = styled.div`
  margin-top: 3px;
  width: 60px;
  height: 15px;
  background: ${loadingBackgroundColor};
`;

const Meta = styled.div`
  margin-top: 6px;
  width: 120px;
  height: 12px;
  background: ${loadingBackgroundColor};
`;

const Content = styled.div`
  margin-bottom: 16px;
  p {
    width: 60%;
    height: 16px;
    margin-bottom: 8px;
    background: ${loadingBackgroundColor};
    animation: elastic .5s ease-in-out infinite alternate;
  }
  .animation-delay {
    animation-delay: .5s;
  }
  @keyframes elastic {
    from {
      width: 60%;
    }
    to {
      width: 100%;
    }
  }
`;

const ToolGroup = styled.div`
  .iconfont {
    margin-right: 5px;
    color: ${loadingBackgroundColor};
  }
  .text {
    display: inline-block;
    width: 40px;
    height: 14px;
    margin-right: 10px;
    background: ${loadingBackgroundColor};
  }

`;

function CommentsLoading() {
  return (
    <Wrapper>
      <User>
        <StyledAvatar />
        <Info>
          <Nickname />
          <Meta />
        </Info>
      </User>
      <Content>
        <p></p>
        <p className="animation-delay"></p>
      </Content>
      <ToolGroup>
        <span className="iconfont">&#xe6b3;</span>
        <span className="text"></span>
        <span className="iconfont">&#xe641;</span>
        <span className="text"></span>
      </ToolGroup>
    </Wrapper>
  );
}

export default CommentsLoading;