import React from 'react';
import { connect } from 'react-redux';
import { Board, RecommendedAuthors } from '../components';

function Right({ boardList }) {
  return (
    <div className="col-7 col-offset-1">
      <Board list={boardList} />
      <RecommendedAuthors />
    </div>
  );
}

const mapStateToProps = state => ({
  boardList: state.getIn(['homeReducer', 'boardList'])
});

export default connect(mapStateToProps)(Right);