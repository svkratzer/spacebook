import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../navbar/navbar';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { user } = this.props
    return(
      <div className="profile-main">

        <NavBar />

        <div className="profile-top">
          <div className="cp-container"></div>
          <div className="name-container"></div>
          <div className="line"></div>
          <div className="mini-nav"></div>
        </div>

        <div className="profile-middle">
          <h2>Welcome, {user.first_name}.</h2>
          <p>Name: {user.first_name} {user.last_name}</p>
          <p>Birthday: {user.birthday}</p>
          <Link to="/newsfeed">newsfeed</Link>
        </div>
        
      </div>
    );
  }
}

export default Profile;

// PROFILE PLAN

// profile

// profile_container
// ---- mSTP {  }
// ---- mDTP {  }

// user_api_actions [DONE]
// ---- RECEIVE_USER [DONE]
// ---- receiveUser(user) [DONE] untested
// ---- requestUser(userId) [DONE] untested
// ---- updateUser(user) [DONE] untested
// user_api_util [DONE]
// ---- getUser(userId) [DONE] [untested]
// ---- updateUser(user) [DONE] [untested]
// users_controller [DONE]
// ---- update [DONE]
// routes [DONE]
// ---- update [DONE]