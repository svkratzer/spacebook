import { connect } from 'react-redux';
import FriendButton from './friend_button'
import { withRouter } from 'react-router-dom';
import { createFriend, destroyFriend, fetchFriends } from '../../actions/friend_api_actions'

const mSTP = (state, ownProps) => {
  const friends = Object.values(state.entities.friends)
  const friendsIds = friends.map(friend => (friend.friend_id));
  const currentUserId = state.session.id
  const alreadyFriends = friendsIds.includes(currentUserId);
  const friendshipId = state.entities.friends[currentUserId] ? (
    state.entities.friends[currentUserId].friendship_id
  ) : (
    null
  );
  
  return {
    currentUserId: currentUserId,
    userId: ownProps.match.params.userId,
    user: state.entities.users[ownProps.match.params.userId],
    friendsIds: friendsIds,
    friendshipId: friendshipId,
    alreadyFriends: alreadyFriends
  };
};

const mDTP = (dispatch) => {
  return {
    createFriend: (friendship, userId) => dispatch(createFriend(friendship, userId)),
    destroyFriend: (friendshipId, friendId) => dispatch(destroyFriend(friendshipId, friendId)),
    fetchFriends: (indexType, userId) => dispatch(fetchFriends(indexType, userId))
  }
}

const FriendButtonContainer = withRouter(connect(mSTP, mDTP)(FriendButton));

export default FriendButtonContainer;
