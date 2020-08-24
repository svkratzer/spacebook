import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import PostIndex from './post_index';

import {fetchPosts} from '../../actions/post_api_actions'

const mSTP = (state, ownProps) => {
  return {
    indexType: 'wall',
    userId: ownProps.match.params.userId,
    posts: Object.values(state.entities.posts)
  };
};

const mDTP = dispatch => {
  return {
    fetchPosts: (indexType, userId, page) => dispatch(fetchPosts(indexType, userId, page))
  };
};

const WallContainer = withRouter(connect(mSTP, mDTP)(PostIndex));

export default WallContainer;