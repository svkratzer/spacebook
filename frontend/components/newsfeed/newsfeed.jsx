import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from '../navbar/navbar_container';
import NewsfeedPostIndexContainer from './newsfeed_post_index_container'

class Newsfeed extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 1
    }

    this.defaultPhoto = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
  }

  componentDidMount() {
    this.props.fetchUser(this.props.currentUser.id)
  }

  render() {
    if (!this.props.currentUser) return null;
    const { currentUser } = this.props;
    const currentUserPhoto = this.props.currentUser.profile_url || this.defaultPhoto;

    return (
      <section className="newsfeed-main">
        
        <NavBarContainer />

        <div className="post-form-button-container">
          <img src={currentUserPhoto} />
          <div className="post-form-button"
            onClick={this.props.openModalPostForm}>
            <span>What's on your mind, {currentUser.first_name}?</span>
          </div>
        </div>

        <NewsfeedPostIndexContainer />
      </section>
    );
  }
}

export default Newsfeed;