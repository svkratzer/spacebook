import { connect } from 'react-redux';
import { logout } from '../../actions/session_api_actions';
import Profile from './profile';
import { withRouter } from 'react-router-dom';

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

const ProfileContainer = withRouter(connect(mSTP)(Profile));

export default ProfileContainer;