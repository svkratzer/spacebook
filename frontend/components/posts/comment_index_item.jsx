import React from 'react';
import { fetchUser } from '../../actions/user_api_actions';

class CommentIndexItem extends React.Component {
  constructor(props)  {
    super(props)
  }

  componentDidMount() {
    if (this.props.author) {
      fetchUser(this.props.author.id);
    }
  }

  render() {
    if (!this.props.author) return null;

    return (
      <>  
        <div className="commenter-name">{this.props.author.first_name} {this.props.author.last_name}</div>
        <div>{this.props.comment.body}</div>
      </>
    );
  }
}

export default CommentIndexItem;