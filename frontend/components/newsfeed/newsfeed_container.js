import { connect } from 'react-redux';
import { logout } from '../../actions/session_api_actions';
import Newsfeed from './newsfeed';

const mSTP = (state) => {
  return {
    user: state.entities.users[state.session.id]
  };
};

const mDTP = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  };
};

const NewsfeedContainer = connect(mSTP, mDTP)(Newsfeed);

export default NewsfeedContainer;