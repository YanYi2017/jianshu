import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
  popularTopics: [],
  morePopularTopics: {},
  articleList: [],
  boardList: [],
  recommendedAuthors: [],
  articlePage: 1,
  showBackTop: false,
  loading: false
});

const getInitialData = (state, action) => {
  return state.merge({
    popularTopics: fromJS(action.popularTopics),
    morePopularTopics: fromJS(action.morePopularTopics),
    articleList: fromJS(action.articleList),
    boardList: fromJS(action.boardList),
    recommendedAuthors: fromJS(action.recommendedAuthors)
  });
};

const addArticleList = (state, action) => {
  const newData = state.get('articleList').concat(fromJS(action.articleList));
  return state.merge({
    articleList: newData,
    articlePage: action.nextPage
  });
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.GET_INITIAL_DATA:
      return getInitialData(state, action);
    case actionTypes.ADD_ARTICLE_LIST:
      return addArticleList(state, action);
    case actionTypes.TOGGLE_TOP_SHOW:
      return state.set('showBackTop', fromJS(action.show));
    case actionTypes.TOGGLE_LOADING:
      return state.set('loading', fromJS(action.show));
    case actionTypes.CHANGE_RECOMMENDED_AUTHORS:
      return state.set('recommendedAuthors', fromJS(action.users));
    default:
      return state
  }
};

export default reducer;