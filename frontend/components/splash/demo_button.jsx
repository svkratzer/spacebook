import React from 'react';
import faker from 'faker';

class DemoLoginButton extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
    this._demoUser = {
      first_name: "Nick",
      last_name: "Cage",
      cover_url: "",
      profile_url: "",
      bio: "This site might contain a lot of Nick Cages. It's not a bug--it's a feature.",
      email: `${(Math.random() * 10000000000000000)}${faker.internet.email()}`,
      birthday: "1964-8-25",
      password: "123456"
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this._demoUser);
  }


  render() {
    return (
      <button className="demo-login-button"
        onClick={this.handleSubmit}>
        Demo Login
      </button>
    );
  }
}

export default DemoLoginButton;