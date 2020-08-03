import React from 'react';

class PostForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      author_id: this.props.currentUserId,
      wall_id: this.props.userId,
      body: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createPost({post: this.state});
    this.props.closeModal();
  }

  // handleSubmit(e) {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append('post[body]', this.state.body);
  //   formData.append('post[author_id]', this.state.author_id);
  //   formData.append('post[wall_id]', this.state.wall_id);

  //   this.props.createPost(formData);
  // }


  render() {
    return(
      <form className="post-form"
        onSubmit={this.handleSubmit}>
        <div className="header">
          <span>Create Post</span> 
          <button onClick={this.props.closeModal}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="line"></div>

        <textarea placeholder="What's on your mind?"
          value={this.state.body}
          onChange={this.update('body')}>

        </textarea>

        <button className="submit-button" 
          disabled={this.state.body === ""}
          onClick={this.handleSubmit}>
          Post
        </button>
      </form>
    );
  }
}

export default PostForm;