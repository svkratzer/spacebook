import React from 'react';

class EditProfileModal extends React.Component {
  constructor(props) {
    super(props)

    this.currentUser = this.props.currentUser

    this.state = {
      id: this.currentUser.id,
      profile_url: (this.currentUser.profile_url || ""),
      cover_url: (this.currentUser.cover_url || ""),
      first_name: this.currentUser.first_name,
      last_name: this.currentUser.last_name,
      bio: (this.currentUser.bio || "")
    }

    this.prevState = {
      id: this.currentUser.id,
      profile_url: (this.currentUser.profile_url || ""),
      cover_url: (this.currentUser.cover_url || ""),
      first_name: this.currentUser.first_name,
      last_name: this.currentUser.last_name,
      bio: (this.currentUser.bio || "")
    }  

    this.handleSubmit = this.handleSubmit.bind(this);
    this.stateHasChanged = this.stateHasChanged.bind(this);
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

  stateHasChanged(currState, prevState) {
    if (currState.first_name !== prevState.first_name) 
    { return false; } 
    else if (currState.last_name !== prevState.last_name)
    { return false; } 
    else if (currState.profile_url !== prevState.profile_url)
    { return false; } 
    else if (currState.cover_url !== prevState.cover_url)
    { return false; } 
    else if (currState.bio !== prevState.bio)
    { return false; } else {
      return true;
    }
  }

  render() {
    return(
      <div className="edit-user">
        <div className="header">Edit Profile</div>
        <div className="line"></div>
        <form onSubmit={this.handleSubmit}>

          <div className="name-inputs">
            <div>
              <div className="label">First Name</div>
              <input type="text"
                className="first-name"
                value={this.state.first_name}
                placeholder="First name"
                onChange={this.update('first_name')} />
            </div>

            <div>
              <div className="label"> Last Name</div>
              <input type="text"
                className="last-name"
                value={this.state.last_name}
                placeholder="Last name"
                onChange={this.update('last_name')} />
            </div>
          </div>

          <div className="profile-photo">
            <div className="label">Profile Photo</div>
            <input type="text"
              placeholder="Image url..."
              value={this.state.profile_url}
              onChange={this.update('profile_url')}/>
          </div>

          <div className="cover-photo">
            <div className="label">Cover Photo</div>
            <input type="text"
              placeholder="Image url..."
              value={this.state.cover_url}
              onChange={this.update('cover_url')}/>
          </div>

          <div className="bio">
            <div className="label">Bio</div>
            <textarea value={this.state.bio}
              onChange={this.update('bio')}
              placeholder="Describe who you are"
              maxLength={101}>
            </textarea>
          </div>

          <button className="submit-button" 
            onSubmit={this.handleSubmit}
            disabled={this.stateHasChanged(this.state, this.prevState)}>
            Make Changes
          </button>

        </form>
      </div>
    );
  }
}

export default EditProfileModal;

