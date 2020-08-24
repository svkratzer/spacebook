import * as PostApiUtil from '../util/post_api_util'

export const RECEIVE_NEWSFEED_POSTS = 'RECEIVE_NEWSFEED_POSTS'
export const RECEIVE_WALL_POSTS = 'RECEIVE_WALL_POSTS'
export const RECEIVE_POST = 'RECEIVE_POST'

export const REMOVE_POST = 'REMOVE_POST'
export const REMOVE_POSTS = 'REMOVE_POSTS'

// STANDARD ACTION CREATORS

export const receivePost = (post) => ({
  type: RECEIVE_POST,
  post
})

export const receiveNewsfeedPosts = (posts) => ({
  type: RECEIVE_NEWSFEED_POSTS,
  posts
})
export const receiveWallPosts = (posts) => ({
  type: RECEIVE_WALL_POSTS,
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
    .then(post => dispatch(receivePost(post)))

export const fetchPosts = (indexType, userId, page) => dispatch => {
  switch(indexType) {
    case "newsfeed":
      PostApiUtil.getPosts(indexType, userId, page)
        .then(posts => dispatch(receiveNewsfeedPosts(posts)))
    case "wall":
      PostApiUtil.getPosts(indexType, userId, page)
        .then(posts => dispatch(receiveWallPosts(posts)))
  }
}

export const createPost = formPost => dispatch => 
  PostApiUtil.postPost(formPost)
    .then(post => dispatch(receivePost(post)))
    
export const updatePost = formPost => dispatch => 
  PostApiUtil.patchPost(formPost)
    .then(post => dispatch(receivePost(post)))

export const deletePost = postId => dispatch => 
  PostApiUtil.deletePost(postId)
    .then(post => dispatch(removePost(post.id)))
