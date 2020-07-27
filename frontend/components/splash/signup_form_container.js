import { connect } from 'react-redux';
import { signup } from '../../actions/session_api_actions';
import SignupForm from './signup_form';

const mSTP = state => {
  return {
    errors: state.errors.session
  };
}

const mDTP = dispatch => {
  return {
    signup: (user) => dispatch(signup(user))
  };
}

const SignupFormContainer = connect(mSTP, mDTP)(SignupForm);

export default SignupFormContainer;
