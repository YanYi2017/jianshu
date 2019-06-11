import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { BoardWrapper } from '../style';

class Board extends PureComponent {
  render() {
    return (
      <BoardWrapper>
        {this.props.boardList.map((item) => {
          return (
            <Link to={item.get('href')} key={item.get('id')}>
              <img src={item.get('imgURL')} alt={item.get('alt')}/>
            </Link>
          );
        })}
      </BoardWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  boardList: state.getIn(['homeReducer', 'boardList'])
})

export default connect(mapStateToProps, null)(Board);