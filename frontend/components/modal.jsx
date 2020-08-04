import React from 'react';
import { closeModal } from '../actions/modal_actions';
import { connect } from 'react-redux';
import PostFormContainer from './posts/post_form_container';
import FriendsModalContainer from './friends/friends_modal_container'


function Modal({ modal, closeModal }) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'postForm':
      component = <PostFormContainer />;
      break;
    case 'friendsModal':
      component = <FriendsModalContainer />
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);