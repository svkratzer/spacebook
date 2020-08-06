import React from 'react';

class EditProfileModal extends React.Component {
  constructor(props) {
    super(props)

    this.currentUser = this.props.currentUser

    this.state = {
      id: this.currentUser.id,
      profile_url: (this.currentUser.profile_url || ""),
      cover_url: (this.currentUser.profile_url || ""),
      first_name: this.currentUser.first_name,
      last_name: this.currentUser.last_name,
      bio: (this.currentUser.bio || "")
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateUser(this.state);
    this.props.closeModal();
  }

  render() {
    return(
      <div className="edit-user">
        <form onSubmit={this.handleSubmit}>

          <div className="name-inputs">
            <input type="text"
              className="first-name"
              value={this.state.first_name}
              placeholder="First name"
              onChange={this.update('first_name')} />
            <input type="text"
              className="last-name"
              value={this.state.last_name}
              placeholder="Last name"
              onChange={this.update('last_name')} />
          </div>

          <div className="profile-photo">
            <div>Profile Photo</div>
            <input type="text"
              placeholder="Image url..."
              value={this.state.profile_url}
              onChange={this.update('profile_url')}/>
          </div>

          <div className="cover-photo">
            <div>Cover Photo</div>
            <input type="text"
              placeholder="Image url..."
              value={this.state.cover_url}
              onChange={this.update('cover_url')}/>
          </div>

          <div className="bio">
            <div>Bio</div>
            <textarea value={this.state.bio}
              onChange={this.update('bio')}
              placeholder="Describe who you are"
              maxLength={101}>
            </textarea>
          </div>

          <button onSubmit={this.handleSubmit}>
            Make Changes
          </button>

        </form>
      </div>
    );
  }
}

export default EditProfileModal;

