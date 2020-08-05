import React from 'react';
import { Link } from 'react-router-dom';
import CommentIndexItemContainer  from './comment_index_item_container';
import CommentForm from './comment_form'

class PostIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.defaultPhoto = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
  }

  componentDidMount() {
    const authorId = this.props.post.author_id;
    const recipientId = this.props.post.wall_id;

    this.props.fetchUser(authorId);
    if (authorId !== recipientId) {
      this.props.fetchUser(recipientId);
    }

    this.props.fetchComments(this.props.post.id);
  }

  render() {
    const { 
      post, 
      author, 
      recipient, 
      comments, 
      postId, 
      deletePost ,
      currentUserId } = this.props;
    
    const profilePhoto = author.profile_url || this.defaultPhoto
    if (!author || !recipient) return null;

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

          <img src={profilePhoto} className="post-photo"/>

          <div className="date-name">
            {names}
            <div className="date">{post.time}</div>
          </div>

          {currentUserId === author.id && <button onClick={() => { deletePost(postId) }}>
            <i className="fas fa-times"></i>
          </button>}

        </div>
        
        <div className="post-body">{post.body}</div>
        <div className="line"></div>
        
        <CommentForm createComment={this.props.createComment} 
          currentUserId={this.props.currentUserId} 
          postId={this.props.postId}/>

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