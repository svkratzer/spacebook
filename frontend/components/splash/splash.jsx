import React from 'react';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';

class Splash extends React.Component {
  
  render() {
    return (
      <div className='splash-body'>
        
        <div>
          <LoginFormContainer />
        </div>

        <div>
          <h2>Sign Up</h2>
          <SignupFormContainer />
        </div>
      </div>
    );
  }
}

export default Splash;