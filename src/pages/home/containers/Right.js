import React from 'react';
import { connect } from 'react-redux';

import { actionCreators} from '../store';
import { Board, RecommendedAuthors } from '../components';

function Right({ boardList, recommendedAuthors, handleClick }) {
  return (
    <div className="col-7 col-offset-1">
      <Board list={boardList} />
      <RecommendedAuthors authors={recommendedAuthors} onClick={handleClick} />
    </div>
  );
}

const mapStateToProps = state => ({
  boardList: state.getIn(['homeReducer', 'boardList']),
  recommendedAuthors: state.getIn(['homeReducer', 'recommendedAuthors'])
});

const mapDispatchToProps = dispatch => ({
  handleClick() {
    dispatch(actionCreators.changeRecommendedAuthors());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Right);