import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { createPost } from '../../actions/post_api_actions';
import { closeModal } from '../../actions/modal_actions'
import PostForm from './post_form';

const mSTP = (state, ownProps) => {
  return {
    currentUserId: state.session.id,
    userId: (ownProps.match.params.userId || null)
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

