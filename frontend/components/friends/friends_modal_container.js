import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FriendsModal from './friends_modal';

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

const FriendsModalContainer = withRouter(connect(mSTP, mDTP)(FriendsModal));

export default FriendsModalContainer;

