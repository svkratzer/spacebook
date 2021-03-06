import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
  }

  update(field) {
    return (e) => {
      e.preventDefault();
      this.setState({ [field]: e.currentTarget.value });
      $(`.login-error-message`).addClass('hidden');
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state).then(null, () => {
      $('.login-error-message').removeClass('hidden');
    });
  }

  handleFocus(e) {
    e.preventDefault();
    $(`.login-error-message`).addClass('hidden');
  }

  handleBlur(e) {
    e.preventDefault();
    $(`.login-error-message`).addClass('hidden');
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
              onChange={this.update('email')} 
              onFocus={this.handleFocus}
              onBlur={this.handleBlur} />

            <div className="login-error-message error hidden">
              <p>Incorrect email or password</p>
            </div>
          </div>

          <div className="login-password-container">
            <div className="login-label">Password</div>
            
            <input type="password"
              value={this.state.password}
              className="login-input"
              onChange={this.update('password')}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur} />
          </div>
          <button>Log In</button>
        </div>
      </form>
    );
  }
}

export default LoginForm