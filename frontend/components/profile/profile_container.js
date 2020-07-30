import { connect } from 'react-redux';
import { logout } from '../../actions/session_api_actions';
import Profile from './profile';

const mSTP = (state, ownProps) => {
  const userId = ownProps.match.params.userId;
  const user = state.entities.users[userId];
  return {
    userId,
    user
  };
};

const mDTP = (dispatch) => {
  return {

  };
};

const ProfileContainer = connect(mSTP)(Profile);

export default ProfileContainer;