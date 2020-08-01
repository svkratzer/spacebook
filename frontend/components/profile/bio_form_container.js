import { connect } from 'react-redux';
import { updateUser } from '../../actions/user_api_actions';
import { withRouter } from 'react-router-dom'
import BioForm from './bio_form';

const mSTP = (state, ownProps) => {
  const user = state.entities.users[ownProps.match.params.userId]

  return {
    bio: user.bio,
    currentUserId: state.session.id,
    userId: user.id,
    charCount: (user && user.bio) ? user.bio.length : 101
  };
}

const mDTP = (dispatch) => {
  return {
    updateUser: (user) => dispatch(updateUser(user))
  };
}

const BioFormContainer = withRouter(connect(mSTP, mDTP)(BioForm));

export default BioFormContainer;