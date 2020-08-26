import { connect } from 'react-redux';
import { login, signup } from '../../actions/session_api_actions';
import Splash from './splash'

const mDTP = dispatch => {
  return {
    login: user => dispatch(login(user)),
    signup: user => dispatch(signup(user))
  };
};

const SplashContainer = connect(null, mDTP)(Splash);

export default SplashContainer;