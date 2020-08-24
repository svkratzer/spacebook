import { connect } from 'react-redux';
import { fetchUsers, clearUsers } from '../../actions/user_api_actions';
import Search from './search';

const mSTP = (state) => {
  let searchResults = state.entities.search;
  return {
    searchResults
  };
};

const mDTP = (dispatch) => {
  return {
    searchUsers: name => dispatch(fetchUsers(name)),
    clearSearchResults: () => dispatch(clearUsers()),
  }
};

const SearchContainer = connect(mSTP, mDTP)(Search);

export default SearchContainer;