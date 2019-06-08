import React, { Component } from 'react';
import { connect } from 'react-redux';

import { BoardWraper } from '../style';

class Board extends Component {
  render() {
    return (
      <BoardWraper>
        {this.props.boardList.map((item) => {
          return (
            <a href={item.get('href')} target="_blank" rel="noopener noreferrer" key={item.get('id')}>
              <img src={item.get('imgURL')} alt={item.get('alt')}/>
            </a>
          );
        })}
      </BoardWraper>
    );
  }
}

const mapStateToProps = (state) => ({
  boardList: state.getIn(['homeReducer', 'boardList'])
})

export default connect(mapStateToProps, null)(Board);