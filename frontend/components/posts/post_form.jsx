import React from 'react';

class PostForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      author_id: this.props.currentUserId,
      wall_id: this.props.userId,
      body: ''
    }

  }

  render() {
    return(
      <form className="post-form">
        <div className="header">
          <span>Create Post</span> 
          <button onClick={this.props.closeModal}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="line"></div>

        <textarea placeholder="What's on your mind?">

        </textarea>

        <button className="submit-button" 
          disabled={this.state.body === ""}>
          Post
        </button>
      </form>
    );
  }
}

export default PostForm;