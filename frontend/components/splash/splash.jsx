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
      <div>
        <div className='splash-body'>
          
          <div className="splash-top">
              <div className="splash-header">
                <a href="/" className="splash-title">myface</a>
                <LoginFormContainer />
              </div>
          </div>

          <div className="splash-main">
            <div className="splash-main-body">
              <div className="splash-info-section">
                <h2>Connect with friends and the world around you on MyFace.</h2>
                <ul>
                  <li>
                    <span>See photos and updates</span> from friends in News Feed.
                  </li>
                  <li>
                    <span>Share what's new</span> in your life on your Wall.
                  </li>
                  <li>
                    <span>Find more</span> of what you're looking for with MyFace Search.
                  </li>
                </ul>
              </div>

              <div className="splash-signup-section">
                <h2>Sign Up</h2>
                <h3>It's quick and easy.</h3>
                <SignupFormContainer />
                <hr/>
                <button onClick={() => this.props.login(this.demoUserCredentials)}>
                  Demo Login
                </button>
                <div className="signup-form-terms">
                  Click the <span>Demo Login</span> button to be automatically logged into the demo account.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="splash-bottom">

          <div className="splash-footer">

            <div>Check out the repo on <a onClick={() => window.open("https://github.com/svkratzer/MyFace")}>Github</a>
            </div>
            <hr />
            <div> Sam Kratzer © 2020 </div>
          </div>
        </div>
      </div>

    );
  }
}

export default Splash;