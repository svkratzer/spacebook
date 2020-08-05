import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FriendsModal from './friends_modal';

import { fetchFriends } from '../../actions/friend_api_actions';

const mSTP = (state, ownProps) => {
  const arr = ownProps.location.pathname
  const userId = parseInt(arr[arr.length - 1], 10);
  return {
    currentUserId: state.session.id,
    userId: userId,
    friends: Object.values(state.entities.friends)
  };
}

const mDTP = (dispatch) => {
  return {
    fetchFriends: (indexType, userId) => dispatch(fetchFriends(indexType, userId))
  };
}

const FriendsModalContainer = withRouter(connect(mSTP, mDTP)(FriendsModal));

export default FriendsModalContainer;

