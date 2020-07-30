import React from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends React.Component {
  
  render() {
    return (
      <section className="navbar-main">
        <div className="navbar-buttons">
          <div className="navbar-search">
            <input type="text"/>
          </div>

          <div className="nav-middle-buttons">
            <a>
              <NavLink to='/newsfeed'><i class="fas fa-home"></i></NavLink>
            </a>
          </div>

          <div className="nav-right-buttons">
            <button><i class="fas fa-caret-down"></i></button>
            <button onClick={this.props.logout}>logout</button>
          </div>
        </div>
      </section>
    );
  }

}

export default NavBar;