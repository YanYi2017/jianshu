import { fromJS } from 'immutable';

import * as actionTypes from './actionTypes';

const defaultState = fromJS({
  focused: false,
  list: []
});

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_FOCUS:
      return state.set('focused', true);
    case actionTypes.SEARCH_BLUR:
      return state.set('focused', false);
    case actionTypes.CHANGE_LIST:
      const data = action.data.splice(10);    // 挑选前10的关键词
      return state.set('list', data);
    default:
      return state;
  }
};

export default reducer;