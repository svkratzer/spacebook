import * as PostApiUtil from '../util/post_api_util'

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const RECEIVE_POST = 'RECEIVE_POST'

export const REMOVE_POST = 'REMOVE_POST'
export const REMOVE_POSTS = 'REMOVE_POSTS'

// STANDARD ACTION CREATORS

export const receivePost = (post) => ({
  type: RECEIVE_POST,
  post
})

export const receivePosts = (posts) => ({
  type: RECEIVE_POSTS,
  posts
})

export const removePost = (postId) => ({
  type: REMOVE_POST,
  postId
})

export const removePosts = () => ({
  type: REMOVE_POSTS
})

// THUNK ACTION CREATORS

export const fetchPost = postId => dispatch =>
  PostApiUtil.getPost(postId)
    .then(post => dispatch(receivePost(post)));

export const fetchPosts = () => dispatch => 
  PostApiUtil.getPosts()
    .then(payload => dispatch(receivePosts(payload)));

export const createPost = formPost => dispatch => 
  PostApiUtil.createPost(formPost)
    .then(post => dispatch(receivePost(post)));
    
export const updatePost = formPost => dispatch => 
  PostApiUtil.patchPost(formPost)
    .then(post => dispatch(receivePost(post)));

export const deletePost = postId => dispatch => 
  PostApiUtil.deletePost(postId)
    .then(post => dispatch(removePost(post.id)));
