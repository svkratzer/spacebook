import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { merge } from 'lodash';

const _defaultUsers = {};

const usersReducer = (state = _defaultUsers, action) => {
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { [action.currentUser.id]: action.currentUser })
    default:
      return state;
  }
};

export default usersReducer;