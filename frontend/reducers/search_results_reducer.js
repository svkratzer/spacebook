import { RECEIVE_USERS, CLEAR_USERS } from '../actions/user_api_actions'
import { merge } from 'lodash';

const searchResultsReducer = (state = _defaultUsers, action) => {
  switch (action.type) {
    case RECEIVE_USERS:
      return merge({}, state, action.users);
    case CLEAR_USERS:
      return {};
    default:
      return state;
  }
};

export default searchResultsReducer;