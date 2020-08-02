import React from 'react';
import PostIndexContainer from '../posts/post_index_container';
import PostFormContainer from '../posts/post_form_container';

class Wall extends React.Component {
  
  render() {
    return(
      <div className="wall">
        <PostFormContainer />
        <PostIndexContainer />
      </div>
    );
  }
}

export default Wall;