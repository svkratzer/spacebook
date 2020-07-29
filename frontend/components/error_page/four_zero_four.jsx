import React from 'react';

class FourZeroFour extends React.Component {

  render() {
    return(
      <div className="error-page">
        <marquee 
          className="blinking" 
          behavior="scroll" 
          direction="left">
          DANGER DANGER DANGER DANGER DANGER DANGER DANGER DANGER DANGER DANGER DANGER DANGER DANGER DANGER DANGER DANGER DANGER DANGER DANGER DANGER DANGER DANGER DANGER DANGER DANGER DANGER DANGER
        </marquee>
        
        <div className="four-zero-four">
          <h1>404</h1>
          <h2>Ya done goofed ¯\_(ツ)_/¯</h2>
          <a href="/">Click here to return to MyFace</a>
        </div>
       
        <marquee 
          className="blinking" 
          behavior="scroll" 
          direction="right">
          DANGER DANGER DANGER DANGER DANGER DANGER DANGER DANGER DANGER DANGER DANGER DANGER DANGER DANGER DANGER DANGER DANGER DANGER DANGER DANGER DANGER DANGER DANGER DANGER DANGER DANGER DANGER
        </marquee>
      </div>
    );
  }
}

export default FourZeroFour;