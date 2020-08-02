import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import PostIndex from './post_index';

const mSTP = state => {
  return {
    
  };
};

const mDTP = dispatch => {
  return {

  };
};

const PostIndexContainer = withRouter(connect(mSTP, mDTP)(PostIndex));

export default PostIndexContainer;