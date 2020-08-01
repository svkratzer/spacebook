import { connect } from 'react-redux';
import { logout } from '../../actions/session_api_actions';
import Profile from './profile';
import { withRouter } from 'react-router-dom';
import { fetchUser } from '../../actions/user_api_actions';

const mSTP = (state, ownProps) => {
  return {
    currentUserId: state.session.id,
    userId: ownProps.match.params.userId,
    user: state.entities.users[ownProps.match.params.userId]
  };
};

const mDTP = (dispatch) => {
  return {
    fetchUser: userId => dispatch(fetchUser(userId))
  }
}

const ProfileContainer = withRouter(connect(mSTP, mDTP)(Profile));

export default ProfileContainer;

