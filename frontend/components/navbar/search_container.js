import { connect } from 'react-redux';
import { logout } from '../../actions/session_api_actions';
import Search from './search';

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

const SearchContainer = connect(mSTP, mDTP)(Search);

export default SearchContainer;