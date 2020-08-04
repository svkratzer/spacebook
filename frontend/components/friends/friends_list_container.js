import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FriendsList from './friends_list';

import { fetchFriends } from '../../actions/friend_api_actions';

const mSTP = (state, ownProps) => {

  return {
    
  };
}

const mDTP = (dispatch) => {
  return {
    fetchFriends: (userId) => dispatch(fetchFriends(userId))
  };
}

const FriendsListContainer = withRouter(connect(mSTP, mDTP)(FriendsList));

export default FriendsListContainer;

