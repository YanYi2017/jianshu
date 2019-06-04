import { INPUT_FOCUS_ACTION, INPUT_BLUR_ACTION } from './actionType';


const defaultState = {
  focused: false
};

const reducer = (state = defaultState, action) => {
  if (action.type === INPUT_FOCUS_ACTION) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.focused = true;
    return newState;
  }
  if (action.type === INPUT_BLUR_ACTION) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.focused = false;
    return newState;
  }
  return state;
};

export default reducer;