import React from 'react';
import { NavLink, Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    debugger
    console.log(this.props.currentUser)
  }
  
  render() {
    const tempProfilePic = "https://cdn1.thr.com/sites/default/files/imagecache/portrait_300x450/2011/06/nicolas_cage_2011_a_p.jpg";
    debugger
    return (
      <section className="navbar-main">
        <div className="navbar-buttons">
          <div className="navbar-search">
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
            
            <Link to={`/users/${this.props.currentUser.id}`}>
                {/* <img src={tempProfilePic} alt="" className="pfp" /> */}
                <div>{this.props.currentUser.first_name}</div>
            </Link>

            <div className="dropdown">
              <button><i className="fas fa-caret-down"></i></button>
              <button onClick={this.props.logout}>logout</button>
            </div>
          </div>
        </div>
      </section>
    );
  }

}

export default NavBar;