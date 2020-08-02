import { merge } from 'lodash'
import { RECEIVE_REACT, REMOVE_REACT } from '../actions/react_api_actions'

const reactsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_REACT:
      newState[action.reaction.id] = action.reaction
      return newState;
    case REMOVE_REACT:
      newState = merge({}, state);
      delete newState[action.reactId]
      return newState;
    default:
      return state;
  }
};

export default reactsReducer;