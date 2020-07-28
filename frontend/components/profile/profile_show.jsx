import React from 'react';

class ProfileShow extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    const { user } = this.props
    return(
      <div className="profile-show-body">
        <h2>Welcome, {user.firstName}.</h2>
        <p>Name: {user.firstName} {user.lastName}</p>
        <p>Birthday: {user.birthday}</p>
        <button onClick={() => this.props.logout()}></button>
      </div>
    );
  }
}

