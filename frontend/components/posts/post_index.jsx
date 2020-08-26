import React from 'react';
import PostIndexItemContainer from './post_index_item_container';
import { Waypoint } from 'react-waypoint';

class PostIndex extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      page: 1
    }

    this.fetchPostsPaginated = this.fetchPostsPaginated.bind(this);
  }

  fetchPostsPaginated() {
    const { indexType, userId } = this.props;
    const currPage = this.state.page;

    this.setState({ page: (currPage + 1) }, () => { this.props.fetchPosts(indexType, userId, this.state.page) });
  }

  componentDidMount() {
    const { indexType, userId } = this.props;
    const currPage = this.state.page;
    this.props.fetchPosts(indexType, userId, currPage, this.props.userId);
  }

  componentDidUpdate(prevProps) {
    if (this.props.userId !== prevProps.userId) {
      const { indexType, userId } = this.props;
      const currPage = this.state.page;
      this.props.fetchPosts(indexType, userId, currPage, this.props.userId);
    }
  }

  render() {
    const { posts } = this.props;
    return (
      <>
        <ul className="wall-post-list">
          {posts.map((post) => (
            <li className="post-item" key={post.id}>
              <PostIndexItemContainer 
                post={post}/>
            </li>
          )).reverse()}
        </ul>
        {posts && posts.length > 1 && <Waypoint onEnter={() => { this.fetchPostsPaginated() }} />}
      </>
    );
  }
}

export default PostIndex;