import connect from 'react-redux';
import { login } from '../../actions/session_api_actions';
import LoginForm from './login_form';

const mSTP = state => {
  return {
    errors: state.errors.session
  };
} 

const mDTP = dispatch => {
  return {
    login: user => dispatch(login(user))
  };
}

const LoginFormContainer = connect(mSTP, mDTP)(LoginForm);

export default LoginFormContainer;

