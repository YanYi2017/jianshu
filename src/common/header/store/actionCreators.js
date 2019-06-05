import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';
import axios from 'axios';

const changeList = (list) => ({
  type: actionTypes.CHANGE_LIST,
  list: fromJS(list),
  totalPage: fromJS(Math.ceil(list.length / 10))
});

export const searchFocus = () => ({
  type: actionTypes.SEARCH_FOCUS
});

export const searchBlur = () => ({
  type: actionTypes.SEARCH_BLUR
});

export const mouseEnter = () => ({
  type: actionTypes.MOUSE_ENTER
});

export const mouseLeave = () => ({
  type: actionTypes.MOUSE_LEAVE
});

export const changePage = (page) => ({
  type: actionTypes.CHANGE_PAGE,
  page
});

export const getSearchTrendingList = () => {
  return (dispatch) => {
    axios.get('/api/searchTrending.json')
      .then((res) => {
        dispatch(changeList(res.data.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};