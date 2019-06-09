import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
  'popularTopics': [],
  'morePopularTopics': {},
  'articleList': [],
  'boardList': [],
  'recommendedAuthors': [],
  'articlePage': 1
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
    case actionTypes.ADD_ARTICLE_LIST:
      const newData = state.get('articleList').concat(fromJS(action.articleList));
      return state.merge({
        'articleList': newData,
        'articlePage': action.nextPage
      });
    default:
      return state
  }
};

export default reducer;