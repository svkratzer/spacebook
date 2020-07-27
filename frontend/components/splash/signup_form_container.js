import { connect } from 'react-redux';
import { signup } from '../../actions/session_api_actions';
import SignupForm from './signup_form';

const mSTP = state => {
  return {

  };
}

const mDTP = dispatch => {
  return {

  };
}

const SignupFormContainer = connect(mSTP, mDTP)(SignupForm);

export default SignupFormContainer;
