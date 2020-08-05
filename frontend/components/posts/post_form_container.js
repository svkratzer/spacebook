import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { createPost } from '../../actions/post_api_actions';
import { closeModal } from '../../actions/modal_actions'
import PostForm from './post_form';


const mSTP = (state, ownProps) => {
  const arr = ownProps.location.pathname.split('/')
  let userId = null;
  if (arr[arr.length - 1] === 'newsfeed') {
    userId = state.session.id
  } else {
    userId = parseInt(arr[arr.length - 1], 10);
  }

  
  return {
    currentUserId: state.session.id,
    userId: userId
  };
};

const mDTP = dispatch => {
  return {
    createPost: formPost => dispatch(createPost(formPost)),
    closeModal: () => dispatch(closeModal())
  };
};

const PostFormContainer = withRouter(connect(mSTP, mDTP)(PostForm));

export default PostFormContainer;

