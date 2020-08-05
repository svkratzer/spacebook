import React from 'react';
import PostIndexItemContainer from './post_index_item_container';

class PostIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const {indexType, userId} = this.props;
    this.props.fetchPosts(indexType, userId);
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