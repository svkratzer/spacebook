import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import PostIndex from '../posts/post_index';
import { merge } from 'lodash'

import { fetchPosts } from '../../actions/post_api_actions'

const mSTP = (state) => {
  let posts = merge({}, state.entities.posts);
  delete posts.index
  return {
    indexType: 'newsfeed',
    userId: state.session.id,
    posts: Object.values(posts),

  };
};

const mDTP = dispatch => {
  return {
    fetchPosts: (indexType, userId, page, wallId) => dispatch(fetchPosts(indexType, userId, page, wallId))
  };
};

const NewsfeedPostIndexContainer = withRouter(connect(mSTP, mDTP)(PostIndex));

export default NewsfeedPostIndexContainer;