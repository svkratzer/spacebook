import { connect } from 'react-redux';
import { logout } from '../../actions/session_api_actions';
import ProfileShow from './profile_show';

const mSTP = (state, ownProps) => {
  return {
    user: state.users[ownProps.match.params.userId]
  };
};

const mDTP = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  };
};

const ProfileShowContainer = connect(mSTP, mDTP)(ProfileShow);

export default ProfileShowContainer;