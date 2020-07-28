import React from 'react';
import { update } from 'lodash';

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
    return e =>
      this.setState({ [field]: this.currentTarget.value })
  }

  handleSubmit() {
    this.props.login(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}
        className="login-form">

        <div className="login-email-container">
          <div className="login-email-label">Email</div>

          <input type="text"
            value={this.state.email}
            className="login-email-input"
            onChange={this.update('email')} />
        </div>

        <div className="login-passowrd-container">
          <div className="login-password-label">Password</div>
          
          <input type="password"
            value={this.state.password}
            className="login-password-input"
            onChange={this.update('password')}/>
        </div>
        
        <button>Log In</button>
      </form>
    );
  }
}

export default LoginForm