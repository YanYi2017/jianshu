import axios from 'axios';
import * as actionTypes from './actionTypes';

const changeHomeData = (result) => ({
  type: actionTypes.GET_INITIAL_DATA,
  articleList: result.articleList,
  boardList: result.boardList,
  morePopularTopics: result.morePopularTopics,
  popularTopics: result.popularTopics,
  recommendedAuthors: result.recommendedAuthors,

});

export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then((res) => {
      const result = res.data;
      dispatch(changeHomeData(result));
    });
  }
};