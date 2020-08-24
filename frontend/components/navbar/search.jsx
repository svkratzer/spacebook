import React from 'react';
import { Link } from 'react-router-dom';

const SEARCH_WAIT_TIME = 500;
const CLEAR_WAIT_TIME = 500;

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      typing: false
    }
    this.defaultPhoto = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
    this.update = this.update.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  componentDidMount() {
    this.searchTimer = null;
    this.clearTimer = null;
  }

  update(e) {
    clearTimeout(this.searchTimer);
    e.preventDefault();
    
    let timeout = () => { this.props.searchUsers(this.state.name) };
    
    this.searchTimer = setTimeout(timeout, SEARCH_WAIT_TIME);
    this.setState({ name: e.target.value });
  }

  handleFocus(e) {
    e.preventDefault();
    this.setState({ typing: true });
  }

  handleBlur(e) {
    clearTimeout(this.clearTimer)
    e.preventDefault();

    let timeout = () => {
      this.setState({ typing: false, name: "" });
      this.props.clearSearchResults();
    }
    
    this.clearTimer = setTimeout(timeout, CLEAR_WAIT_TIME);
  }

  render() {    
    const { name, typing } = this.state;
    const results = Object.values(this.props.searchResults); 
    let users = null;
    if (results) {
      users = results.map(result => {
        return (
          <li key={result.id} className="result">
            <Link to={`/users/${result.id}`}>
              <img src={result.profile_url ? results.profile_url : this.defaultPhoto}/>
              <div>{result.first_name}&nbsp;{result.last_name}</div>
            </Link>
          </li>
        );
      });
    }
    return (
      <>
        <input type="text"
          className="searchbar"
          onChange={this.update}
          value={name}
          placeholder="Search MyFace"
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}/>

        { typing && results &&
          <ul className="search-results">
            {users}
          </ul>
        }
      </>
    );
  }
}

export default Search;