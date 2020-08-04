import React from 'react';
import friendsReducer from '../../reducers/friends_reducer';

class FriendsList extends React.Component {
  constructor(props) {
    super(props)
    debugger
  }

  componentDidMount() {
    this.props.fetchFriends('friends', this.props.userId);
  }

  render() {
    const { friends } = this.props

    return(
      <>
        <div>Friends {friends.length}</div>
      </>
    );
  }
}

export default FriendsList;