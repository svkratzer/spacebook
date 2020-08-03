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
      <form className="postForm">

        <textarea></textarea>
        <button></button>
      </form>
    );
  }
}

export default PostForm;