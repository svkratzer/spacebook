import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import PostForm from './post_form';

const mSTP = state => {
  return {

  };
};

const mDTP = dispatch => {
  return {

  };
};

const PostFormContainer = withRouter(connect(mSTP, mDTP)(PostForm));

export default PostFormContainer;

