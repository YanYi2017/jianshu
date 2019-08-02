import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes.js';

const defaultState = fromJS({
  title: '',
  author: {},
  content: ''
});

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.GET_PARAGRAPH:
      return state.merge({
        title: fromJS(action.title),
        author: fromJS(action.author),
        content: fromJS(action.content)
      });
    default: 
      return state;
  }
};

export default reducer;