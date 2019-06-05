import { fromJS } from 'immutable';

import { SEARCH_FOCUS, SEARCH_BLUR, CHANGE_LIST } from './actionTypes';

const defaultState = fromJS({
  focused: false,
  list: []
});

const reducer = (state = defaultState, action) => {
  if (action.type === SEARCH_FOCUS) {
    return state.set('focused', true);
  }
  if (action.type === SEARCH_BLUR) {
    return state.set('focused', false);
  }
  if (action.type === CHANGE_LIST) {
    const data = action.data.splice(10);    // 挑选前10的关键词
    return state.set('list', data);
  }
  return state;
};

export default reducer;