import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import PostIndexItem from './post_index_item';

import { fetchPost } from '../../actions/post_api_actions'
import { fetchUser } from '../../actions/user_api_actions'

const mSTP = (state, ownProps) => {
  return {
    author: state.entities.users[ownProps.post.author_id],
    recipient: state.entities.users[ownProps.post.wall_id]
  };
};

const mDTP = dispatch => {
  return {
    fetchPost: (postId) => dispatch(fetchPost(postId)),
    fetchUser: (userId) => dispatch(fetchUser(userId))
  };
};

const PostIndexItemContainer = withRouter(connect(mSTP, mDTP)(PostIndexItem));

export default PostIndexItemContainer;