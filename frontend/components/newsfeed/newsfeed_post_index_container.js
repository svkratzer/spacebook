import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import PostIndex from '../posts/post_index';

import { fetchPosts } from '../../actions/post_api_actions'

const mSTP = (state) => {
  return {
    indexType: 'newsfeed',
    userId: state.session.id,
    posts: Object.values(state.entities.posts)
  };
};

const mDTP = dispatch => {
  return {
    fetchPosts: (indexType, userId, page) => dispatch(fetchPosts(indexType, userId, page))
  };
};

const NewsfeedPostIndexContainer = withRouter(connect(mSTP, mDTP)(PostIndex));

export default NewsfeedPostIndexContainer;