import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from '../navbar/navbar_container';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { user } = this.props
    const coverPhoto = "https://wegotthiscovered.com/wp-content/uploads/2019/11/ezgif.com-webp-to-jpg-62-640x321.jpg"
    const profilePhoto = "https://cdn1.thr.com/sites/default/files/imagecache/portrait_300x450/2011/06/nicolas_cage_2011_a_p.jpg"


    return(
      <div className="profile-main">

        <NavBarContainer />

        <div className="profile-top">

          <div className="cp-container">
            <div className="cp">
              <img src={coverPhoto} alt=""/>
            </div>
            <div className="pfp">
              <img src={profilePhoto} alt="" />
            </div>
          </div>
          <div className="name-container">
            <h2>{user.first_name} {user.last_name}</h2>
          </div>
          <div className="line"></div>
          <div className="mini-nav"></div>
        </div>

        <div className="profile-middle">
          <p>Birthday: {user.birthday}</p>
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