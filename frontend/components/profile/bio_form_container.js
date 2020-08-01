import { connect } from 'react-redux';
import { updateUser } from '../../actions/user_api_actions';
import BioForm from './bio_form';

const mSTP = (state) => {
  const currentUser = state.entities.users[state.session.id]
  const charCount = currentUser.bio.length

  return {
    bio: currentUser.bio,
    currentUserId: currentUser.id,
    charCount
  };
}

const mDTP = (dispatch) => {
  return {
    updateUser: (user) => dispatch(updateUser(user))
  };
}

const BioFormContainer = connect(mSTP, mDTP)(BioForm);

export default BioFormContainer;