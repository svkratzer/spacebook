import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { updateUser } from '../../actions/user_api_actions';
import { closeModal } from '../../actions/modal_actions'
import EditProfileModal from './edit_profile_modal';


const mSTP = (state) => {
  return {
    currentUser: state.entities.users[state.session.id]
  };
};

const mDTP = dispatch => {
  return {
    updateUser: (user) => dispatch(updateUser(user)),
    closeModal: () => dispatch(closeModal())
  };
};

const EditProfileModalContainer = withRouter(connect(mSTP, mDTP)(EditProfileModal));

export default EditProfileModalContainer;

