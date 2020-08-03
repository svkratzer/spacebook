import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PostIndexItem from './post_index_item';

import { fetchPost } from '../../actions/post_api_actions';
import { fetchUser } from '../../actions/user_api_actions';
import { fetchComments } from '../../actions/comment_api_actions';

const mSTP = (state, ownProps) => {
  const postId = ownProps.post.id.toString();
  
  return {
    author: state.entities.users[ownProps.post.author_id],
    recipient: state.entities.users[ownProps.post.wall_id],
    comments: (state.entities.comments[postId] || [])
  };
};

const mDTP = dispatch => {
  return {
    fetchPost: (postId) => dispatch(fetchPost(postId)),
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    fetchComments: (postId) => dispatch(fetchComments(postId))
  };
};

const PostIndexItemContainer = withRouter(connect(mSTP, mDTP)(PostIndexItem));

export default PostIndexItemContainer;