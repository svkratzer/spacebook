import React from 'react';
import { Link } from 'react-router-dom';

class FriendsList extends React.Component {
  constructor(props) {
    super(props)
    
    this.defaultPhoto = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
  }

  componentDidMount() {
    this.props.fetchFriends('friends', this.props.userId);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.userId !== this.props.userId) {
      this.props.fetchFriends('friends', newProps.userId);
    }
  }

  gridify(friends) {
    if (friends.length >= 9) {
      return friends.slice(0, 9).map((friend) => {
        let photoUrl = null
        if (!friend.profile_url) {
          photoUrl = this.defaultPhoto;
        } else {
          photoUrl = friend.profile_url;
        }
        return (
          <div key={friend.friendship_id} className="friend-item">
            <img src={photoUrl}/>
            <Link to={`/users/${friend.friend_id}`}>
              {friend.first_name} {friend.last_name}
            </Link>
          </div>
        );
      });
    } else {
      return friends.map((friend) => {
        let photoUrl = null;
        if (!friend.profile_url) {
          photoUrl = this.defaultPhoto;
        } else {
          photoUrl = friend.profile_url;
        }
        return (
          <div key={friend.friendship_id} className={`friend-item` }>
            <img src={photoUrl} />
            <Link to={`/users/${friend.friend_id}`}>
              {friend.first_name} {friend.last_name}
            </Link>
          </div>
        );
      });
    }
  }

  render() {
    const { friends } = this.props
    const friendsGridItems = this.gridify(friends);
    return(
      <>
        <div className="friends-header">
          <div className="friends-left">
            <div className="friends-title">Friends</div>
            <div className="friends-count">{friends.length} friends</div>
          </div>

          <div className="see-all-button"
            onClick={this.props.openModalFriendsModal}>
            See All
          </div>
        </div>

        <div className="friends-grid">
          {friendsGridItems}
        </div>
      </>
    );
  }
}

export default FriendsList;