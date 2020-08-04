import { merge } from 'lodash';
import {
  RECEIVE_FRIEND,
  RECEIVE_FRIENDS,
  REMOVE_FRIEND,
} from '../actions/friend_api_actions';

const friendsReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_FRIENDS:
      return merge({}, action.users);
    case RECEIVE_FRIEND:
      return merge(newState, { [action.friend.friendship_id]: action.friend});
    case REMOVE_FRIEND:
      delete newState[action.friendshipId];
      return newState;
    default: 
      return state;
  }
}

export default friendsReducer;