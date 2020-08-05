import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from '../navbar/navbar_container';
import NewsfeedPostIndexContainer from './newsfeed_post_index_container'

class Newsfeed extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <section className="newsfeed-main">
        
        <NavBarContainer />

        <NewsfeedPostIndexContainer />
      </section>
    );
  }
}

export default Newsfeed;