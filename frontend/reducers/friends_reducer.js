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
      return merge({}, action.friends);
    case RECEIVE_FRIEND: 
      
      return merge(newState, { [action.friend.friender_id]: action.friend});
    case REMOVE_FRIEND:
      delete newState[action.friendId];
      return newState;
    default: 
      return state;
  }
}

export default friendsReducer;