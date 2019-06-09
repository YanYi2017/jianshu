import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
  'popularTopics': [],
  'morePopularTopics': {},
  'articleList': [],
  'boardList': [],
  'recommendedAuthors': []
});

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.GET_INITIAL_DATA:
      return state.merge({
        'popularTopics': fromJS(action.popularTopics),
        'morePopularTopics': fromJS(action.morePopularTopics),
        'articleList': fromJS(action.articleList),
        'boardList': fromJS(action.boardList),
        'recommendedAuthors': fromJS(action.recommendedAuthors)
      })
    default:
      return state
  }
};

export default reducer;