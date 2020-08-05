import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import Newsfeed from './newsfeed';

const mSTP = (state) => {
  return {
    currentUser: state.entities.users[state.session.id]
  };
};

const mDTP = (dispatch) => {
  return {
    openModalPostForm: () => dispatch(openModal('postForm'))
  };
};

const NewsfeedContainer = connect(mSTP, mDTP)(Newsfeed);

export default NewsfeedContainer;