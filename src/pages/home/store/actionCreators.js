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
      .then(res => {
        dispatch(toggleLoading(false));
        dispatch(changeHomeData(res.data.data));
      })
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
        dispatch(toggleLoading(false));
        dispatch(addAtricleList(result, nextPage));
      })
      .catch(err => alert(err));
  }
}

export const toggleTopShow = show => ({
  type: actionTypes.TOGGLE_TOP_SHOW,
  show
});

export const toggleLoading = show => ({
  type: actionTypes.TOGGLE_LOADING,
  show
});

export const changeRecommendedAuthors = () => {
  return (dispatch, getState) => {
    const authors = getState().getIn(['homeReducer', 'recommendedAuthors']).toJS();
    const seen_ids = authors.map(author => author.id).join('%2C');
    const count = 5;
    const only_unfollowed = true;

    axios.get(_util.getServerURL('/recommended'), {
      params: {
        seen_ids,
        count,
        only_unfollowed
      }
    })
      .then(res => {
        const users = res.data.data.users;
        dispatch({
          type: actionTypes.CHANGE_RECOMMENDED_AUTHORS,
          users
        })
      })
      .catch(err => console.log(err));
  }
}