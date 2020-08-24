import React from 'react';
import { Link } from 'react-router-dom';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: { name: "" }
    }
  }

  render() {
    <form>
      <input type="text"
        className="searchbar"/>
    </form>
  }
}

export default Search;