import React from 'react';

class FourZeroFour extends React.Component {
  
  componentDidMount() {
    setInterval(() => window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ'), 5000);
  }

  render() {
    return(
      <div className="error-page">
        <marquee className="blinking" behavior="" direction="">DANGER DANGER DANGER</marquee>
        <div>
          <h1>404</h1>
          <h2>Ya done goofed ¯\_(ツ)_/¯</h2>
        </div>
        
        <marquee className="blinking" behavior="" direction="">DANGER DANGER DANGER</marquee>
      </div>
    );
  }
}

export default FourZeroFour;