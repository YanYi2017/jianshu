import axios from 'axios';
import * as actionTypes from './actionTypes';
import _util from '../../../util';

const changePost = (title, author, content, support) => ({
  type: actionTypes.GET_PARAGRAPH,
  title,
  author,
  content,
  support
});

export const getPost = id => {
  return dispatch => {
    axios.get(_util.getServerURL('/post'), {
      params: {
        id
      }
    })
      .then(res => {
        if (res.data.success) {
          const { title, author, content, support } = res.data.data.article;
          dispatch(changePost(title, author, content, support));
        } else {
          alert('请求失败，请稍后再试');
        }
      })
      .catch(err => {
        console.log(err);
        alert('出错了');
      });
  }
};

const changeComments = comments => ({
  type: actionTypes.CHANGE_COMMENTS,
  comments
});

export const getComments = (authorOnly = false, orderBy = 'desc', currentPageNum = 1) => {
  return dispatch => {
    axios.get(_util.getServerURL('/comments'), {
      params: {
        author_only: authorOnly,
        order_by: orderBy,
        page: currentPageNum
      }
    })
      .then(res => {
        if (res.data.success) {
          dispatch(changeComments(res.data.data));
        } else {
          alert('请求失败，请稍后再试');
        }
      })
      .catch(err => {
        alert('出错了');
      })
  };
};