import { combineReducers } from 'redux-immutable';

import { reducer as headerReducer } from '../pages/header/store';
import { reducer as homeReducer } from '../pages/home/store';
import { reducer as detailReducer } from '../pages/detail/store';
import { reducer as registerReducer } from '../pages/login-and-register/register-box/store';
import { reducer as loginReducer } from '../pages/login-and-register/login-box/store';

const rootReducer = combineReducers({
  headerReducer,
  homeReducer,
  detailReducer,
  loginReducer,
  registerReducer
});

export default rootReducer;