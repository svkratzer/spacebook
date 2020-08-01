import { RECEIVE_CURRENT_USER } from '../actions/session_api_actions';
import { RECEIVE_USER } from '../actions/user_api_actions'
import { merge } from 'lodash';

const _defaultUsers = {};

const usersReducer = (state = _defaultUsers, action) => {
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { [action.currentUser.id]: action.currentUser });
    case RECEIVE_USER:
      return merge({}, state, { [action.user.id]: action.user });
    default:
      return state;
  }
};

export default usersReducer;