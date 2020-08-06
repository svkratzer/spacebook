import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from '../navbar/navbar_container';
import BioFormContainer from './bio_form_container'
import FriendButtonContainer from './friend_button_container'
import Wall from './wall'
import FriendsListContainer from '../friends/friends_list_container'

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.defaultCoverPhoto = "https://scx2.b-cdn.net/gfx/news/hires/2019/4-space.jpg"
    this.defaultProfilePhoto = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
  }

  componentDidMount() {
    this.props.fetchUser(this.props.userId);
    window.addEventListener('scroll', this.handleScroll);
  }

  componentDidUpdate(prevProps) {
    if (this.props.userId !== prevProps.userId) {
      this.props.fetchUser(this.props.userId);
    };
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const stick = document.getElementsByClassName("left-container")[0];
    const sticky = stick.offsetTop;
    if (window.pageYOffset > 550) {
      stick.classList.add("sticky");
    } else if (window.pageYOffset <= 550) {
      stick.classList.remove("sticky");
    }
  }

  render() {
    const { user, currentUser } = this.props
    if (user === undefined) return null;

    const coverPhoto = user.cover_url || this.defaultCoverPhoto
    const profilePhoto = user.profile_url || this.defaultProfilePhoto

    const currentUserPhoto = this.props.currentUserPhoto || this.defaultCoverPhoto;

    const isCurrentUser = parseInt(this.props.userId) === this.props.currentUserId;
    
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
          <div className="mini-nav">
            
            <div className="mini-nav-main">
            
            {isCurrentUser &&
                <button className="edit-profile-button"
                  onClick={this.props.openModalEditProfileForm}>
                Edit Profile
                &nbsp;
                <i className="fas fa-user-edit"></i>
              </button>
            }

            { !isCurrentUser &&
              <FriendButtonContainer />
            }
            </div>

          </div>
        </div>

        <div className="profile-middle">

          <div className="left-container">
            <div className="about-container">
              <div className="about">About</div>
              <div className="line"></div>
              <div className="about-body">
                Welcome to {user.first_name}'s profile page. From here, you can write on their wall to the right
                or check their friend's list below. If you <span>are</span> {user.first_name}, then from here you can 
                also edit your profile.
              </div>
            </div>
            <div className="friends-container">
              <FriendsListContainer />
            </div>
          </div>

          <div className="right-container">
            <div className="post-form-button-container">
              <img src={currentUserPhoto} />
              <div className="post-form-button"
                onClick={this.props.openModalPostForm}>
                <span>What's on your mind, {currentUser.first_name}?</span> 
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