import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';
import axios from 'axios';

const changeList = (list) => ({
  type: actionTypes.CHANGE_LIST,
  list: fromJS(list),
  totalPage: fromJS(Math.ceil(list.length / 10))
});

export const changeSearchInput = (input) => ({
  type: actionTypes.CHANGE_SEARCH_INPUT,
  input
});

export const toggleFocus = (isFocused) => ({
  type: actionTypes.TOGGLE_FOCUS,
  isFocused
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