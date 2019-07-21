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

export const changeNightMode = (value) => {
  return (dispatch, getState) => {
    const nightMode = getState().getIn(['headerReducer', 'nightMode']);
    if (value !== nightMode) {
      dispatch({
        type: actionTypes.CHANGE_NIGHT_MODE,
        value
      });
    }
  }
};

export const changeFontFamily = (value) => {
  return (dispatch, getState) => {
    const fontFamily = getState().getIn(['headerReducer', 'fontFamily']);
    if (value !== fontFamily) {
      dispatch({
        type: actionTypes.CHANGE_FONT_FAMILY,
        value
      });
    }
  }
};

export const changeFontType = (value) => {
  return (dispatch, getState) => {
    const fontType = getState().getIn(['headerReducer', 'fontType']);
    if (value !== fontType) {
      dispatch({
        type: actionTypes.CHANGE_FONT_TYPE,
        value
      });
    }
  }
};