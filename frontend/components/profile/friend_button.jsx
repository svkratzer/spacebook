import React from 'react';

class FriendButton extends React.Component {
  constructor(props) {
    super(props)

    this.handleFriend = this.handleFriend.bind(this);
    this.handleUnfriend = this.handleUnfriend.bind(this);
  }

  handleFriend(e) {
    e.preventDefault();

    const friendship = {
      friend_a_id: this.props.currentUserId,
      friend_b_id: this.props.userId
    }

    this.props.createFriend(friendship, this.props.currentUserId)
  } 

  handleUnfriend(e) {
    e.preventDefault();
    this.props.destroyFriend(this.props.friendshipId, this.props.currentUserId)
  }

  render() {
    const {friendsIds, currentUserId} = this.props
    const alreadyFriends = friendsIds.includes(currentUserId);

    
    const friendButton = alreadyFriends ? (
      <button className = "remove-friend"
        onClick={this.handleUnfriend}>
        Friends
        &nbsp;
        <i className="fas fa-user-check"></i>
      </button>
      ) : (
      <button className = "add-friend"
        onClick={this.handleFriend}>
        Add Friend
        &nbsp;
        <i className="fas fa-user-plus"></i>
      </button>
    );

    return (
      <div className="friend-button">
        {friendButton}
      </div>
    );
  }
}

export default FriendButton;