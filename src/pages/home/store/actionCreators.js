import axios from 'axios';
import * as actionTypes from './actionTypes';
import _util from '../../../util';

const changeHomeData = (result) => ({
  type: actionTypes.GET_INITIAL_DATA,
  articleList: result.articleList,
  boardList: result.boardList,
  morePopularTopics: result.morePopularTopics,
  popularTopics: result.popularTopics,
  recommendedAuthors: result.recommendedAuthors,
});

const addAtricleList = (result, nextPage) => ({
  type: actionTypes.ADD_ARTICLE_LIST,
  articleList: result.articleList,
  nextPage
});

export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get(_util.getServerURL('/get_home_data'))
      .then(res => dispatch(changeHomeData(res.data.data)))
      .catch(err => alert(err));
  }
};

export const getMoreList = () => {
  return (dispatch, getState) => {
    const nextPage = getState().getIn(['homeReducer', 'articlePage']) + 1;
    axios.post(_util.getServerURL('/trending_notes'), {
      page: nextPage
    })
      .then(res => {
        const result = res.data.data;
        dispatch(addAtricleList(result, nextPage));
      })
      .catch(err => alert(err));
  }
}

export const toggleTopShow = (show) => ({
  type: actionTypes.TOGGLE_TOP_SHOW,
  show
});