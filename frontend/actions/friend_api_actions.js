import * as FriendApiUtil from '../util/friend_api_util';

export const RECEIVE_FRIEND = 'RECEIVE_FRIEND'
export const RECEIVE_FRIENDS = 'RECEIVE_FRIENDS'
export const REMOVE_FRIEND = 'REMOVE_FRIEND'

// STANDARD ACTION CREATORS

const receiveFriend = (friend) => ({
  type: RECEIVE_FRIEND,
  friend
});

const receiveFriends = (friends) => ({
  type: RECEIVE_FRIENDS,
  friends
});

const removeFriend = (friendId) => ({
  type: REMOVE_FRIEND,
  friendId
})

// THUNK ACTION CREATORS

export const fetchFriends = (indexType, userId) => dispatch =>
  FriendApiUtil.getFriends(indexType, userId)
    .then(friends => dispatch(receiveFriends(friends)))

export const createFriend = (friendship, userId) => dispatch => 
  FriendApiUtil.postFriend(friendship, userId)
    .then(friend => dispatch(receiveFriend(friend)))

export const destroyFriend = (friendshipId, friendId) => dispatch => 
  FriendApiUtil.deleteFriend(friendshipId)
    .then(() => dispatch(removeFriend(friendId)))