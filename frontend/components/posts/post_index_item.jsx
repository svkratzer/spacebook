import React from 'react';

class PostIndexItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <p>{this.props.time}</p>
        <p>{this.props.body}</p>
      </>
    );
  }
}

export default PostIndexItem;