import { merge } from 'lodash';
import { LOGOUT_CURRENT_USER } from '../actions/session_api_actions';
import { 
  RECEIVE_COMMENT, 
  RECEIVE_COMMENTS, 
  REMOVE_COMMENT, 
  REMOVE_COMMENTS} from '../actions/comment_api_actions';

const commentsReducer = (state = {}, action) => {
  const newState = merge({}, state);
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_COMMENT:
      let postId = (Object.keys(action.comment))[0];
      let comment = (Object.values(action.comment))[0];
      newState[postId].push(comment);
      return newState;
    case RECEIVE_COMMENTS:
      return merge({}, state, action.comments);
    case REMOVE_COMMENT:
      delete newState[action.commentId];
      return newState;
    case REMOVE_COMMENTS:
      newState.forEach( comment => {
          if (comment.id === action.postId ) {
            delete newState[comment.id]
          }
        });
      return newState;
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
};

export default commentsReducer;