import React from 'react';
import WallContainer from '../posts/wall_container';

class Wall extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return(
      <div className="wall">
        <WallContainer />
      </div>
    );
  }
}

export default Wall;