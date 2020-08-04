import React from 'react';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      body: "",
      author_id: this.props.currentUserId,
      post_id: this.props.postId
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => {
      e.preventDefault();
      this.setState({ [field]: e.target.value })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createComment(this.state);
    this.textInput.value="";
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input id="textInput" 
          value={this.state.body}
          className="comment-input" 
          type="text"
          onChange={this.update('body')}
          placeholder="Write a comment..." />
      </form>
    );
  }
}

export default CommentForm;