import { combineReducers } from 'redux-immutable';

import { reducer as headerReducer } from '../common/header/store';
import { reducer as homeReducer } from '../pages/home/store';
import { reducer as detailReducer } from '../pages/detail/store';
import { reducer as loginReducer } from '../pages/login-and-register/store';

const rootReducer = combineReducers({
  headerReducer,
  homeReducer,
  detailReducer,
  loginReducer
});

export default rootReducer;