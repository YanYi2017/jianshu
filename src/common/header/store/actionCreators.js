import axios from 'axios';
import * as actionTypes from './actionTypes';
import _util from '../../../util';

export const changeSearchInput = (input) => ({
  type: actionTypes.CHANGE_SEARCH_INPUT,
  input
});

export const toggleFocus = (isFocused) => ({
  type: actionTypes.TOGGLE_FOCUS,
  isFocused
});

export const toggleList = () => ({
  type: actionTypes.TOGGLE_LIST
});

export const toggleMouseIn = (mouseIn) => ({
  type: actionTypes.TOGGLE_MOUSE_IN,
  mouseIn
});

export const changePage = () => {
  return (dispatch, getState) => {
    let { page, totalPage } = getState().get('headerReducer').toJS();
    if (page < totalPage) {
      dispatch({
        type: actionTypes.CHANGE_PAGE,
        page: ++page
      });
    } else {
      dispatch({
        type: actionTypes.CHANGE_PAGE,
        page: 1
      });
    }
  }
};

export const getSearchTrendingList = () => {
  return (dispatch) => {
    axios.get(_util.getServerURL('/trending_search'))
      .then(res => {
        const list = res.data.data;
        dispatch({
          type: actionTypes.CHANGE_TRENDING_LIST,
          totalPage: Math.ceil(list.length / 10),
          list
        });
      })
      .catch(err => {
        alert(err);
      });
  };
};