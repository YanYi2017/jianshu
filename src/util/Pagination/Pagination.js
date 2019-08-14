import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.ul`
  display: flex;
  justify-content: center; 
  margin: 40px 0;
`;

const Item = styled.li`
  margin: 0 5px;

  button {
    padding: 6px 12px;
    font-size: 14px;
    border: 1px solid #ddd;
    border-radius: 20px;
    color: #969696;
    :hover {
      background: #eee;
    }
    &.active {
      border: none;
      background: transparent;
      cursor: default;
    }
  }
`;

function Pagination({ className, currentPageNum = 1, totalPageNum = 0, pageRange = 3, onChange }) {
  const [stateCurrent, setStateCurrent] = useState(currentPageNum);

  // 若传入onChange函数，则依赖外部数据，若没有传入onChange函数，则依赖内部数据
  const current = onChange ? currentPageNum : stateCurrent;
  const handleChange = onChange || setStateCurrent;

  const startNum = Math.max(current - pageRange, 1);
  const endNum = Math.min(current + pageRange, totalPageNum);
  const list = [];


  if (totalPageNum <= 1) {
    return null;
  }

  for (let i = startNum; i <= endNum; i++) {
    list.push(
      <Item key={i}>
        <button
          className={i === current ? 'active' : undefined}
          disabled={i === current}
          onClick={() => handleChange(i)}
        >{i}</button>
      </Item>
    );
  }

  return (
    <Wrapper className={className}>
      {
        current !== 1 && (
          <Item>
            <button onClick={() => handleChange(current - 1)}>
              上一页
            </button>
          </Item>)
      }
      {list}
      {
        current !== totalPageNum && (
          <Item>
            <button onClick={() => handleChange(current + 1)}>
              下一页
            </button>
          </Item>
        )
      }
    </Wrapper>
  );
}

Pagination.propTypes = {
  className: PropTypes.string,
  currentPageNum: PropTypes.number.isRequired,
  totalPageNum: PropTypes.number.isRequired,
  pageRange: PropTypes.number,
  onChange: PropTypes.func
};

export default Pagination;