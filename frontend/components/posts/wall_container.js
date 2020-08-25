import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import PostIndex from './post_index';
import { merge } from 'lodash'

import {fetchPosts} from '../../actions/post_api_actions'

const mSTP = (state, ownProps) => {
  let posts = merge({}, state.entities.posts);
  delete posts.index
  return {
    indexType: 'wall',
    userId: ownProps.match.params.userId,
    posts: Object.values(posts)
  };
};

const mDTP = dispatch => {
  return {
    fetchPosts: (indexType, userId, page, wallId) => dispatch(fetchPosts(indexType, userId, page, wallId))
  };
};

const WallContainer = withRouter(connect(mSTP, mDTP)(PostIndex));

export default WallContainer;