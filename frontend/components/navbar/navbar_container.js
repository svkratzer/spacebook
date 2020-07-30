import { connect } from 'react-redux';
import { logout } from '../../actions/session_api_actions';
import NavBar from './navbar';
import { withRouter } from 'react-router-dom';

const mSTP = (state, ownProps) => {
  return {
    currentUserId: state.session.id,
    userId: ownProps.match.params.userId,
    user: state.entities.users[ownProps.match.params.userId]
  };
};

const mDTP = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  };
};

const NavBarContainer = withRouter(connect(mSTP, mDTP)(NavBar));

export default NavBarContainer;

