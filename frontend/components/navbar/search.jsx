import React from 'react';
import { Link } from 'react-router-dom';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      typing: false
    }
  }

  render() {
    <>
      <input type="text"
        className="searchbar"/>
    </>
  }
}

export default Search;