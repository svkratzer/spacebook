import * as ApiCommentUtil from '../util/comment_api_util';

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT'
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'

export const REMOVE_COMMENT = 'REMOVE_COMMENT'
export const REMOVE_COMMENTS = 'REMOVE_COMMENTS'


/* THE FOLLOWING ARE "STANDARD" ACTION CREATORS */

// Action for adding a single comment to the store
export const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

// Action for adding multiple comments to the store
export const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
})

// Removes a single post from the store
export const removeComment = comment => ({
  type: REMOVE_COMMENT,
  comment
})

// Removes multiple posts from the store
export const removeComments = postId => ({
  type: REMOVE_COMMENTS,
  postId
})

/* THUNK ACTION CREATORS */

// For making a GET request and returning a single comment from the store
export const fetchComment = id => dispatch => 
  ApiCommentUtil.fetchComment(id)
    .then(comment => dispatch(receiveComment(comment)));

// For making a GET request and adding multiple comments to the store
// NOTE: The index action for comments is nested under the posts resource
export const fetchComments = (postId) => dispatch => 
  ApiCommentUtil.getComments(postId, page)
    .then(comments => dispatch(receiveComments(comments)));
    
// For making a POST request and adding a comment to the store
export const createComment = comment => dispatch =>
  ApiCommentUtil.postComment(comment)
    .then(comment => dispatch(receiveComment(comment)));

// For making a PATCH request and updating an existing comment in the store
export const updateComment = comment => dispatch => 
  ApiCommentUtil.updateComment(comment)
    .then(comment => dispatch(receiveComment(comment)));

// For making a DELETE request and removing a comment from the store
export const deleteComment = commentId => dispatch => 
  ApiCommentUtil.deleteComment(commentId)
    .then(comment => dispatch(removeComment(comment)));

