import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from '../navbar/navbar_container';
import BioFormContainer from './bio_form_container'
import Wall from './wall'
import FriendsListContainer from '../friends/friends_list_container'

class Profile extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }

  componentDidUpdate(prevProps) {
    if (this.props.userId !== prevProps.userId) {
      this.props.fetchUser(this.props.userId);
    };
  }

  render() {
    const user = this.props.user
    const coverPhoto = "https://wegotthiscovered.com/wp-content/uploads/2019/11/ezgif.com-webp-to-jpg-62-640x321.jpg"
    const profilePhoto = "https://cdn1.thr.com/sites/default/files/imagecache/portrait_300x450/2011/06/nicolas_cage_2011_a_p.jpg"
    
    if (user === undefined) return null;
   
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
            
            <div className="bio">
              <p className="bio-text">{user.bio}</p>
              <BioFormContainer />
            </div>
          </div>
          <div className="line"></div>
          <div className="mini-nav"></div>
        </div>

        <div className="profile-middle">

          <div className="left-container">
            <div className="about-container">
              <div>About</div>
            </div>
            <div className="friends-container">
              <FriendsListContainer />
            </div>
          </div>

          <div className="right-container">
            <div className="post-form-button-container">
              <img src={profilePhoto} />
              <div className="post-form-button"
                onClick={this.props.openModalPostForm}>
                <span>What's on your mind, {user.first_name}?</span> 
              </div>
            </div>
            <Wall />
          </div>

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