import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from '../navbar/navbar_container'

class Newsfeed extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <section className="newsfeed-main">
        <ul>
          <li>
            This is the newsfeed.
          </li>
          <li>
            It contains newsfeed stuff.
          </li>
          <li>
            <button onClick={this.props.logout}>logout</button>
          </li>
        </ul>
      </section>
    );
  }
}

export default Newsfeed;