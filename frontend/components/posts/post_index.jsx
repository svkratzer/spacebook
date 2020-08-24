import React from 'react';
import PostIndexItemContainer from './post_index_item_container';

class PostIndex extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      page: 1
    }
  }

  fetchPostsPaginated(indexType, userId, page) {
    this.props.fetchPosts(indexType, userId, page);
    this.setState({ page: (this.state.page + 1) });
  }

  componentDidMount() {
    const {indexType, userId} = this.props;
    const { page } = this.state;
    this.props.fetchPosts(indexType, userId, page);
  }

  componentDidUpdate(prevProps) {
    const { indexType, userId } = this.props;
    if (userId !== prevProps.userId) {
      this.props.fetchPosts(indexType, userId);
    }
  }

  render() {
    const { posts } = this.props;
    return (
      <ul className="wall-post-list">

        {posts.map((post) => (
          <li className="post-item" key={post.id}>
            <PostIndexItemContainer 
              post={post}/>
          </li>
        )).reverse()}

      </ul>
    );
  }
}

export default PostIndex;