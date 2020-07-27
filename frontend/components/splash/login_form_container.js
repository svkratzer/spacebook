import connect from 'react-redux';
import { login } from '../../actions/session_api_actions';
import LoginForm from './login_form';

const mSTP = state => {
  return {

  };
} 

const mDTP = dispatch => {
  return {

  };
}

const LoginFormContainer = connect(mSTP, mDTP)(LoginForm);

export default LoginFormContainer;

