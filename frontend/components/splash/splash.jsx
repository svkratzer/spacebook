import React from 'react';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';

class Splash extends React.Component {
  
  render() {
    return (
      <div className='splash-body'>
        <LoginFormContainer />
        <SignupFormContainer />
      </div>
    );
  }
}

export default Splash;