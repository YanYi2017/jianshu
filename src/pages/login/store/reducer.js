import { fromJS } from 'immutable'; 
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
  login: false
});

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_LOGIN:
      return state.set('login', fromJS(action.login))
    case actionTypes.CHANGE_LOGOUT:
      return state.set('login', fromJS(action.login))
    default:
      return state;
  }
};

export default reducer;