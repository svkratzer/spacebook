import React from 'react';
import PostIndexItem from './post_index_item';

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
      this.props.requestPosts(indexType, userId);
    }
  }

  render() {
    const { posts } = this.props;
    return (
      <ul className="wall-post-list">

        {posts.map((post) => (
          <li className="post-item" key={post.id}>
            <PostIndexItem 
              time={post.time}
              body={post.body}/>
          </li>
        ))}

      </ul>
    );
  }
}

export default PostIndex;