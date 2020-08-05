import { connect } from 'react-redux';
import Profile from './profile';
import { withRouter } from 'react-router-dom';
import { fetchUser } from '../../actions/user_api_actions';
import { openModal } from '../../actions/modal_actions'
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
    fetchUser: userId => dispatch(fetchUser(userId)),
    openModalPostForm: () => dispatch(openModal('postForm')),
    createFriend: (friendship, userId) => dispatch(createFriend(friendship, userId)),
    destroyFriend: (friendshipId) => dispatch(destroyFriend(friendshipId))
  }
}

const ProfileContainer = withRouter(connect(mSTP, mDTP)(Profile));

export default ProfileContainer;

