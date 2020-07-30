import React from 'react';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { user } = this.props
    return(
      <div className="profile-show-body">
        <h2>Welcome, {user.first_name}.</h2>
        <p>Name: {user.first_name} {user.last_name}</p>
        <p>Birthday: {user.birthday}</p>
        <button onClick={() => this.props.logout()}>logout</button>
      </div>
    );
  }
}

export default Profile;