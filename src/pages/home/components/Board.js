import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import { Link } from 'react-router-dom';

import { BoardWrapper } from './style';

function Board({ list }) {
  return (
    <BoardWrapper>
      {list.map((item) => {
        return (
          <Link to={item.get('href')} key={item.get('id')}>
            <img src={item.get('imgURL')} alt={item.get('alt')} />
          </Link>
        );
      })}
    </BoardWrapper>
  );
}

Board.propTypes = {
  list: PropTypes.instanceOf(Immutable.List).isRequired
};

export default Board;