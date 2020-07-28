import React from 'react';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';

class Splash extends React.Component {
  constructor(props) {
    super(props);

    this.demoUserCredentials = {
      email: "thecage@nick.com",
      password: "password123"
    }
  }
  
  render() {
    return (
      <div className='splash-body'>
        
        <div>
          <LoginFormContainer />
        </div>

        <div>
          <h2>Sign Up</h2>
          <SignupFormContainer />
          <button onClick={() => this.props.login(this.demoUserCredentials)}>
            Nicholas Cage Simulator
          </button>
        </div>

      </div>
    );
  }
}

export default Splash;