import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) =>
      this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit() {
    this.props.login(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}
        className="login-form">
        
        <div className="login-container">
          <div className="login-email-container">
            <div className="login-label">Email or Phone</div>

            <input type="text"
              value={this.state.email}
              className="login-input"
              onChange={this.update('email')} />
          </div>

          <div className="login-password-container">
            <div className="login-label">Password</div>
            
            <input type="password"
              value={this.state.password}
              className="login-input"
              onChange={this.update('password')}/>
          </div>
          <button>Log In</button>
        </div>
      </form>
    );
  }
}

export default LoginForm