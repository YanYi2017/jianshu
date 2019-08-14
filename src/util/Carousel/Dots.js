import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.ul`
  position: absolute;
  left: 10%;
  bottom: 6%;
  width: 80%;
  height: 10%;
  padding: 0;
  margin: 0;
  text-align: center;
`;

const Dot = styled.li`
  display: inline-block;
  margin-right: 5px;
  width: 5%;
  height: 10%;
  background: ${props => props.isCurrent ? '#fff' : 'rgba(0, 0, 0, .3)'};
  transition: background 1s ease;
  cursor: pointer;
`;

function Dots({ length, realPosition, onClick }) {
  return (
    <Wrapper>
      {
        Array.from({length}, (dot, i) => (
          <Dot
            key={i}
            isCurrent={realPosition === i}
            onClick={() => onClick(i)}
          />
        ))
      }
    </Wrapper>
  );
}

Dots.propTypes = {
  length: PropTypes.number,
  realPosition: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Dots;