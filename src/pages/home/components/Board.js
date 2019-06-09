import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { BoardWrapper } from '../style';

class Board extends PureComponent {
  render() {
    return (
      <BoardWrapper>
        {this.props.boardList.map((item) => {
          return (
            <a href={item.get('href')} target="_blank" rel="noopener noreferrer" key={item.get('id')}>
              <img src={item.get('imgURL')} alt={item.get('alt')}/>
            </a>
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