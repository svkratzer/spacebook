import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PostIndexItem from './post_index_item';

import { fetchPost, deletePost } from '../../actions/post_api_actions';
import { fetchUser } from '../../actions/user_api_actions';
import { fetchComments, createComment } from '../../actions/comment_api_actions';

const mSTP = (state, ownProps) => {
  const postId = ownProps.post.id.toString();
  
  return {
    currentUserId: state.session.id,
    postId: postId,
    author: state.entities.users[ownProps.post.author_id],
    recipient: state.entities.users[ownProps.post.wall_id],
    comments: (state.entities.comments[postId] || [])
  };
};

const mDTP = dispatch => {
  return {
    fetchPost: (postId) => dispatch(fetchPost(postId)),
    deletePost: (postId) => dispatch(deletePost(postId)),
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    fetchComments: (postId) => dispatch(fetchComments(postId)),
    createComment: (comment) => dispatch(createComment(comment))
  };
};

const PostIndexItemContainer = withRouter(connect(mSTP, mDTP)(PostIndexItem));

export default PostIndexItemContainer;