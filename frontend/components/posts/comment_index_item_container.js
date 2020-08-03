import { connect } from 'react-redux';
import CommentIndexItem from './comment_index_item';
import { fetchUser } from '../../actions/user_api_actions';


const mSTP = (state, ownProps) => {
  return {
    author: state.entities.users[ownProps.comment.author_id]
  };
};

const mDTP = (dispatch) => {
  return {
    fetchUser: (userId) => dispatch(fetchUser(userId))
  };
};
const CommentIndexItemContainer = connect(mSTP, mDTP)(CommentIndexItem);

export default CommentIndexItemContainer;