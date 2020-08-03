import React from 'react';
import { Link } from 'react-router-dom';
import CommentIndexItemContainer  from './comment_index_item_container';

class PostIndexItem extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      body: "",
      author_id: this.props.currentUserId,
      post_id: this.props.postId
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createCreate(this.state);
  }

  update(field) {
    return e => {
      e.preventDefault();
      this.setState({ [field]: e.target.value })
    }
  }

  componentDidMount() {
    const authorId = this.props.author.id;
    const recipientId = this.props.recipient.id;
    this.props.fetchUser(authorId);
    if (authorId !== recipientId) {
      this.props.fetchUser(recipientId);
    }

    this.props.fetchComments(this.props.post.id);
  }

  render() {
    const { post, author, recipient, comments } = this.props;
    
    
    const names = (author.id === recipient.id) ? (
      <div>
        <Link to={`/users/${author.id}`}>
          {author.first_name} {author.last_name}
        </Link>
      </div>
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
        <div className="post-header">
          {names}
          <div className="date">{post.time}</div>
        </div>
        
        <div className="post-body">{post.body}</div>
        <div className="line"></div>
        
        <form>
            <input className="comment-input" type="text"
              onChange={this.update('body')}
              placeholder="Write a comment..."/>
        </form>
        
        <ul className="comments">
          {comments.map((comment) => (
            <li className="comment" key={comment.id}>
              <CommentIndexItemContainer postId={post.id} comment={comment}/>
            </li>
          ))}
        </ul>
        
      </>
    );
  }
}

export default PostIndexItem;