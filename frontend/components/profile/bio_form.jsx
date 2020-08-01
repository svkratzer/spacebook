import React from 'react';

class BioForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bio: this.props.bio,
      id: this.props.currentUserId,
      charCount: this.props.charCount
    }

    this.prevBio = this.props.bio
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateUser({ bio: this.state.bio, id: this.state.id });
  }

  handleCancel(e) {
    e.preventDefault();
    this.setState({ bio: this.prevBio })
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value })
    }
  }

  showForm() {
    $('.edit-bio').addClass('hidden');
    $('.bio-text').addClass('hidden');
    $('.bio-form').removeClass('hidden');
  }

  hideForm(e) {
    e.preventDefault();
    $('.bio-form').addClass('hidden');
    $('.edit-bio').removeClass('hidden');
    $('.bio-text').removeClass('hidden');
  }

  render() {


    return (
      <div className="bio">
        <p className="bio-text">{this.props.bio}</p>

        <div className="edit-bio"
          onClick={() => { this.showForm(); }}>
          Edit bio
        </div>

        <form className="bio-form hidden" onSubmit={this.handleSubmit}>

          <textarea value={this.state.bio}
            onChange={this.update('bio')}
            placeholder="Describe who you are"
            maxLength={101}>
          </textarea>

          <span className="charCount"
            onChange={this.update('charCount')}>
            {101 - this.state.bio.length} characters remaining
          </span>
          <div className="form-bottom">
            <p>
              <i class="fas fa-question-circle"></i> Try editing your bio!
            </p>
            <div className="button-container">
              <button className="cancel" onClick={ (e) => {this.hideForm(e); this.handleCancel(e)}}>Cancel</button>
              <button onClick={ (e) => {this.hideForm(e); this.handleSubmit(e)}}
                disabled={this.state.bio === this.prevBio}>
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default BioForm;