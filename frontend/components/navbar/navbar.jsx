import React from 'react';

class NavBar extends React.Component {
  
  render() {
    return (
      <section className="navbar-main">
        <button onClick={this.props.logout}>logout</button>
      </section>
    );
  }

}

export default NavBar;