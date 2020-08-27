import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import { fetchUser } from '../../actions/user_api_actions';
import { fetchFriends } from '../../actions/friend_api_actions';
import Newsfeed from './newsfeed';

const mSTP = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
    suggestedFriends: Object.values(state.entities.friends)
  };
};

const mDTP = (dispatch) => {
  return {
    openModalPostForm: () => dispatch(openModal('postForm')),
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    fetchSuggestedFriends: (userId) => dispatch(fetchFriends('suggested_friends', userId))
  };
};

const NewsfeedContainer = connect(mSTP, mDTP)(Newsfeed);

export default NewsfeedContainer;