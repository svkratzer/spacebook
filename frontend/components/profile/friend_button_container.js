import { connect } from 'react-redux';
import FriendButton from './friend_button'
import { withRouter } from 'react-router-dom';
import { createFriend, destroyFriend } from '../../actions/friend_api_actions'

const mSTP = (state, ownProps) => {
  const friends = Object.values(state.entities.friends)
  const friendsIds = friends.map(friend => (friend.friend_id));

  return {
    currentUserId: state.session.id,
    userId: ownProps.match.params.userId,
    user: state.entities.users[ownProps.match.params.userId],
    friendsIds: friendsIds
  };
};

const mDTP = (dispatch) => {
  return {
    createFriend: (friendship, userId) => dispatch(createFriend(friendship, userId)),
    destroyFriend: (friendshipId) => dispatch(destroyFriend(friendshipId))
  }
}

const FriendButtonContainer = withRouter(connect(mSTP, mDTP)(FriendButton));

export default FriendButtonContainer;
