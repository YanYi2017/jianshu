import { combineReducers } from 'redux';

import { reducer as headerReducer} from '../common/header/store';

const rootReducer = combineReducers({
  headerReducer,
});

export default rootReducer;