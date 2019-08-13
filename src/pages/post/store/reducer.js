import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes.js';

const defaultState = fromJS({
  title: '',
  author: {},
  content: '',
  support: {},
  comments: {}
});

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.GET_PARAGRAPH:
      return state.merge({
        title: fromJS(action.title),
        author: fromJS(action.author),
        content: fromJS(action.content),
        support: fromJS(action.support),
      });
    case actionTypes.CHANGE_COMMENTS:
      return state.set('comments', fromJS(action.comments))
    default: 
      return state;
  }
};

export default reducer;