import React from 'react';
import { NavLink, Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const profilePhoto = "https://cdn1.thr.com/sites/default/files/imagecache/portrait_300x450/2011/06/nicolas_cage_2011_a_p.jpg";
    return (
      <section className="navbar-main">
        <div className="navbar-buttons">
          <div className="navbar-search">
            <Link className="logo" to="/newsfeed">
              <i className="fas fa-meh"></i>
            </Link>
            <input className="searchbar" type="text" placeholder="Search MyFace"/>
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
              <button className="dropdown-button"><i className="fas fa-caret-down"></i></button>
              <div className="dropdown-content">
                <a href={`/#/users/${this.props.currentUser.id}`}>
                  <img src={profilePhoto} alt="" className="pfp" />
                  <div>
                    <div className="name">{this.props.currentUser.first_name}</div>
                    <div className="description">See your profile</div>
                  </div>
                </a>
                <div className="line"></div>
                <div className="logout-button" onClick={this.props.logout}>
                  <div><i className="fas fa-sign-out-alt"></i></div>
                  <span>logout</span>
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