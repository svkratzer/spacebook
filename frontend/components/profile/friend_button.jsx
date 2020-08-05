import React from 'react';

class FriendButton extends React.Component {
  constructor(props) {
    super(props)

    this.friendship = {
      friend_a_id: this.props.currentUserId,
      friend_b_id: this.props.userId
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.createFriend(this.friendship, this.props.currentUserId)
  } 

  componentDidMount() {

  }

  componentDidUpdate() {

  }

  render() {
    const {friendsIds, currentUserId} = this.props
    const alreadyFriends = friendsIds.includes(currentUserId);


    const friendButton = alreadyFriends ? (
      <button>
        Remove Friend
      </button>
      ) : (
      <button onClick={this.handleClick}>
        Add Friend
      </button>
    );

    return (
      <div className="add-friend">
        {friendButton}
      </div>
    );
  }
}

export default FriendButton;