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
      .then((res) => {
        const result = res.data.data;
        dispatch(changeHomeData(result));
      });
  }
};

export const getMoreList = (articlePage) => {
  return (dispatch) => {
    axios.get(`/api/homeList.json?page=${articlePage}`).then((res) => {
      const result = res.data;
      dispatch(addAtricleList(result, articlePage + 1));
    });
  }
}

export const toggleTopShow = (show) => ({
  type: actionTypes.TOGGLE_TOP_SHOW,
  show
});