import React from 'react';
import { Link } from 'react-router-dom';

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
        <Link to="/newsfeed">newsfeed</Link>
      </div>
    );
  }
}

export default Profile;

// PROFILE PLAN
// profile
// profile_container
// user_api_actions
// ---- RECEIVE_USER, RECEIVE_USERS, RECEIVE_NAME
// ---- receiveUser(user) 
// ---- requestUser
// ---- updateUser
// user_api_util
// ---- getUser(userId)
// ---- updateUser(user)
// users_controller
// ---- update
// routes [DONE]
// ---- update [DONE]