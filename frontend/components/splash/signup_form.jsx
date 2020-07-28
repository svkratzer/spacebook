import React from 'react';
import * as dateOptions from './date_options'

class SignupForm extends React.Component {
  constructor(props) {
    super(props);

    let date = new Date();
    this.day = date.getDate();
    this.month = date.getMonth();
    this.year = date.getFullYear();

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      birthday: `${this.year}-${this.month}-${this.day}`,
      gender: ''
    };

    this.birthdayArray = this.state.birthday.split('-');

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    this.props.signup(this.state);
  }

  update(field) {
    return (e) => 
      this.setState({ [field]: e.currentTarget.value });
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

  render() {
    return (
      <form className="signup-form"
        onSubmit={this.handleSubmit}>

        <div className="name-inputs">
          <input type="text"
            className="firstName"
            value={this.state.firstName}
            placeholder="First name"
            onChange={this.update('firstName')}/>
          <input type="text" 
            className="lastName"
            value={this.state.lastName}
            placeholder="Last name"
            onChange={this.update('lastName')}/>
        </div>
        
        <div className="email-input">
          <input type="text" 
            className="email"
            value={this.state.email}
            placeholder="Email address"
            onChange={this.update('email')}/>
        </div>

        <div className="password-input">
          <input type="password" 
            className="password"
            value={this.state.password}
            placeholder="New password"
            onChange={this.update('password')}/>
        </div>

        <div className="birthday-input">
          <label>Birthday</label>
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


      </form>
    );
  }
}

export default SignupForm;