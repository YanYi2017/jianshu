import axios from 'axios';
import * as actionTypes from './actionTypes';

const changeDetail = (title, author, content) => ({
  type: actionTypes.GET_DETAIL,
  title, 
  author,
  content
});

export const getDetail = (idd) => {
  return (dispatch) => {
    axios.get('/api/detail.json?id=' + idd).then((res) => {
      const {title, author, content} = res.data.data;
      dispatch(changeDetail(title, author, content));
    });
  }
};