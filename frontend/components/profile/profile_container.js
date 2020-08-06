import { connect } from 'react-redux';
import Profile from './profile';
import { withRouter } from 'react-router-dom';
import { fetchUser } from '../../actions/user_api_actions';
import { openModal } from '../../actions/modal_actions'
import { createFriend, destroyFriend } from '../../actions/friend_api_actions'

const mSTP = (state, ownProps) => {
  const friends = Object.values(state.entities.friends)
  const friendsIds = friends.map(friend => (friend.friend_id));
  const currentUserId = state.session.id

  const currentUserPhoto = state.entities.users[currentUserId] ? (
    state.entities.users[currentUserId].profile_url
  ) : (
    null
  )

  return {
    currentUserId: currentUserId,
    currentUser: state.entities.users[currentUserId],
    currentUserPhoto: currentUserPhoto,
    userId: ownProps.match.params.userId,
    user: state.entities.users[ownProps.match.params.userId],
    friendsIds: friendsIds
  };
};

const mDTP = (dispatch) => {
  return {
    fetchUser: userId => dispatch(fetchUser(userId)),
    openModalPostForm: () => dispatch(openModal('postForm')),
    openModalEditProfileForm: () => dispatch(openModal('editProfileForm')),
    createFriend: (friendship, userId) => dispatch(createFriend(friendship, userId)),
    destroyFriend: (friendshipId) => dispatch(destroyFriend(friendshipId))
  }
}

const ProfileContainer = withRouter(connect(mSTP, mDTP)(Profile));

export default ProfileContainer;

