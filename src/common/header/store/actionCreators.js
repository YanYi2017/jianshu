import { SEARCH_FOCUS, SEARCH_BLUR, CHANGE_LIST } from './actionTypes';
import { fromJS } from 'immutable';
import axios from 'axios';

export const searchFocus = () => ({
  type: SEARCH_FOCUS
});

export const searchBlur = () => ({
  type: SEARCH_BLUR
});

const changeList = (data) => ({
  type: CHANGE_LIST,
  data: fromJS(data)
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