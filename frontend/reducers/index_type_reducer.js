import { RECEIVE_NEWSFEED_POSTS, RECEIVE_WALL_POSTS } from '../actions/post_api_actions';

export default function indexTypeReducer(state = null, action) {
  switch (action.type) {
    case RECEIVE_NEWSFEED_POSTS:
      return "newsfeed";
    case RECEIVE_WALL_POSTS:
      return "wall";
    default:
      return state;
  }
}