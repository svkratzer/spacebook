import React from 'react';
import * as dateOptions from '../../util/date_options_util';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);

    let date = new Date();
    this.day = date.getDate();
    this.month = date.getMonth();
    this.year = date.getFullYear();

    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      birthday: `${this.year}-${this.month}-${this.day}`,
      gender: ''
    };

    this.birthdayArray = this.state.birthday.split('-');
    this.handleErrors = this.handleErrors.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state);
  }

  update(field) {
    return (e) => 
      this.setState({ [field]: e.target.value });
  }

  updateBirthday(field) {
    return e => {
      switch(field) {
        case 'month':
          this.month = e.target.value;
        case 'day':
          this.day = e.target.value;
        case 'year':
          this.year = e.target.value;
      }
      return this.setState({ birthday: `${this.year}-${this.month}-${this.day}` });
    }
  }

  showCustomGenderInput() {
    $('.custom-gender-input').removeClass('hidden');
  }

  hideCustomGenderInput() {
    $('.custom-gender-input').addClass('hidden');
  }

  updateGender(option) {
    if (option === 'custom') {
      this.showCustomGenderInput();
    } else {
      this.hideCustomGenderInput();
    }
  }

  handleErrors() {
    if (this.props.errors) {
      this.props.errors.forEach((error) => {
        if (error.includes('name')) {
          $('.name-e').removeClass('hidden');
          $('.first-name').addClass('error-border');
          $('.last-name').addClass('error-border');
        } else if (error.includes('Email')) {
          $('.email-e').removeClass('hidden');
          $('.email').addClass('error-border');
        } else if (error.includes('Password')) {
          $('.password-e').removeClass('hidden');
          $('.password').addClass('error-border');
        }
      });
    }
  }

  componentDidUpdate() {
    if (this.props.errors) {
      this.handleErrors();
    }
  }

  render() {
    return (
      <form className="signup-form"
        onSubmit={this.handleSubmit}>

        <div className="name-inputs">
          <input type="text"
            className="first-name"
            value={this.state.first_name}
            placeholder="First name"
            onChange={this.update('first_name')}/>
          <input type="text" 
            className="last-name"
            value={this.state.last_name}
            placeholder="Last name"
            onChange={this.update('last_name')}/>
          
          <div className="signup-error-message error hidden name-e">
            <p>Please provide a first and last name.</p>
          </div>
        </div>
        
        <div className="email-input">
          <input type="text" 
            className="email"
            value={this.state.email}
            placeholder="Mobile number or email"
            onChange={this.update('email')}/>

          <div className="signup-error-message error hidden email-e">
            <p>Please, enter a valid email or phone number.</p>
          </div>
        </div>

        <div className="password-input">
          <input type="password" 
            className="password"
            value={this.state.password}
            placeholder="New password"
            onChange={this.update('password')}/>

          <div className="signup-error-message error hidden password-e">
            <p>Please, enter a password over six characters in length.</p>
          </div>
        </div>

        <div className="birthday-inputs-container">
          <div className="bg-label">Birthday</div>

          <select className="month"
            value={this.state.birthday.split('-')[1]}
            onChange={this.updateBirthday('month')}>
            <option>Month</option>
            {dateOptions.months}
          </select>

          <select className="day"
            value={this.state.birthday.split('-')[2]}
            onChange={this.updateBirthday('day')}>
            <option>Day</option>
            {dateOptions.days}
          </select>

          <select className="year"
            value={this.state.birthday.split('-')[0]}
            onChange={this.updateBirthday('year')}>
            <option>Year</option>
            {dateOptions.years}
          </select>
        </div>

        <div className="bg-label">Gender</div>
        <div className="gender-inputs-container">

          <label className="gender-input-label">
            <input type="radio"
              name="g"
              value="Female"
              className="gender-input"
              onClick={() => {this.updateGender('female'); this.update('gender')}}/>
            Female
          </label>  

          <label className="gender-input-label">
            <input type="radio"
              name="g"
              value="Male"
              className="gender-input"
              onClick={() => { this.updateGender('male'); this.update('gender') }}/>
            Male
          </label>

          <label className="gender-input-label">
            <input type="radio"
              name="g"
              value="Custom"
              className="gender-input"
              onClick={() => {this.updateGender('custom'); this.update('gender')}}/>
            Custom
          </label>

        </div>
        <input type="text"
          className="custom-gender-input hidden"
          value={this.state.gender}
          placeholder="Gender (optional)"
          onChange={this.update('gender')} />
        
        <div className="signup-form-terms">
          By clicking Sign Up, you recognize that <span>this is a fake website</span> and is for <span>demonstrational purposes only</span>. Please, <span>DO NOT</span> use real and/or sesnsitive
          information when creating an account.
        </div>
        
        <button className="submit-button" type="submit">Sign Up</button>
        
      </form>
    );
  }
}

export default SignupForm;