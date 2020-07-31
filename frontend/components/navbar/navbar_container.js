import { connect } from 'react-redux';
import { logout } from '../../actions/session_api_actions';
import NavBar from './navbar';
import { withRouter } from 'react-router-dom';

const mSTP = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
  };
};

const mDTP = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  };
};

const NavBarContainer = withRouter(connect(mSTP, mDTP)(NavBar));

export default NavBarContainer;

