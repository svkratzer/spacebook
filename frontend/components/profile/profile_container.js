import { connect } from 'react-redux';
import { logout } from '../../actions/session_api_actions';
import Profile from './profile';
import { withRouter } from 'react-router-dom';

const mSTP = (state, ownProps) => {
  return {
    userId: ownProps.match.params.userId,
    user: state.entities.users[ownProps.match.params.userId]
  };
};

const ProfileContainer = withRouter(connect(mSTP)(Profile));

export default ProfileContainer;

// profile
// profile_container
// user_api_actions
// ---- RECEIVE_USER, RECEIVE_USERS, RECEIVE_NAME
// ---- receiveUser(user) 
// ---- requestUser
// ---- updateUser
// user_api_util
// ---- getUser(userId)
// ---- updateUser(user)
// users_controller
// ---- update
// routes
// ---- update