import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import PostIndex from '../posts/post_index';

import { fetchPosts } from '../../actions/post_api_actions'

const mSTP = (state, ownProps) => {
  return {
    indexType: 'newsfeed',
    userId: state.session.id,
    posts: Object.values(state.entities.posts)
  };
};

const mDTP = dispatch => {
  return {
    fetchPosts: (indexType, userId) => dispatch(fetchPosts(indexType, userId))
  };
};

const NewsfeedPostIndexContainer = withRouter(connect(mSTP, mDTP)(PostIndex));

export default NewsfeedPostIndexContainer;