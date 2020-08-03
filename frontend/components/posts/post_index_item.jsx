import React from 'react';
import { Link } from 'react-router-dom';

class PostIndexItem extends React.Component {
  constructor(props) {
    super(props)

  }

  componentDidMount() {
    const authorId = this.props.author.id;
    const recipientId = this.props.recipient.id;
    this.props.fetchUser(authorId);
    if (authorId !== recipientId) {
      this.props.fetchUser(recipientId);
    }
  }

  render() {
    const { post, author, recipient } = this.props;

    const names = (author.id === recipient.id) ? (
      <Link to={`/users/${author.id}`}>
        {author.first_name} {author.last_name}
      </Link>
    ) : (
      <div>
        <Link to={`/users/${author.id}`}>
          {author.first_name} {author.last_name}
        </Link>
        &nbsp;
        <i className="fas fa-caret-right"></i>
        &nbsp;
        <Link to={`/users/${recipient.id}`}>
          {recipient.first_name} {recipient.last_name}
        </Link> 
      </div>
    );

    return (
      <>
        <div classname="names">{names}</div>
        <div>{post.time}</div>
        <div>{post.body}</div>
      </>
    );
  }
}

export default PostIndexItem;