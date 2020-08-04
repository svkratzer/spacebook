import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FriendsList from './friends_list';

import { fetchFriends } from '../../actions/friend_api_actions';

const mSTP = (state, ownProps) => {

  return {
    userId: ownProps.match.params.userId,
    friends: Object.values(state.entities.friends)
  };
}

const mDTP = (dispatch) => {
  return {
    fetchFriends: (userId) => dispatch(fetchFriends(userId))
  };
}

const FriendsListContainer = withRouter(connect(mSTP, mDTP)(FriendsList));

export default FriendsListContainer;

