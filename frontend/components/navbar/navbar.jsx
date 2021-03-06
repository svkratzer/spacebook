import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import SearchContainer from './search_container'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.defaultPhoto = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
    this.showDropdown = this.showDropdown.bind(this);
  }

  showDropdown() {
    return e => {
      e.preventDefault();
      $('.dropdown-content').removeClass('hidden');
      $('.dropdown-button').addClass('clicked');
    }
  }
  
  render() {
    const profilePhoto = this.props.currentUser.profile_url || this.defaultPhoto;
    return (
      <section className="navbar-main">
        <div className="navbar-buttons">
          <div className="navbar-search">
            <Link className="logo" to="/newsfeed">
              <i className="fas fa-laugh"></i>
            </Link>
            <SearchContainer />
          </div>

          <div className="nav-middle-buttons">
            <div className="bar-holder">
              <NavLink to='/newsfeed' className="navlink">
                <i className="fas fa-home"></i>
              </NavLink>
              <div className="blue-bar"></div>
            </div>
          </div>

          <div className="nav-right-buttons">
            
            <NavLink className="profile-button" to={`/users/${this.props.currentUser.id}`}>
                <img src={profilePhoto} alt="" className="pfp" />
                <div>{this.props.currentUser.first_name}</div>
            </NavLink>

            <div className="dropdown">
              <button className="dropdown-button clicker" onClick={this.showDropdown()}>
                <i className="fas fa-caret-down clicker"></i>
              </button>
              <div className="dropdown-content hidden">
                <a href={`/#/users/${this.props.currentUser.id}`}>
                  <img src={profilePhoto} alt="" className="pfp" />
                  <div>
                    <div className="name">{this.props.currentUser.first_name} {this.props.currentUser.last_name}</div>
                    <div className="description">See your profile</div>
                  </div>
                </a>
                <div className="line"></div>
                <div className="logout-button" onClick={this.props.logout}>
                  <div><i className="fas fa-sign-out-alt"></i></div>
                  <span>Log Out</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

}

export default NavBar;