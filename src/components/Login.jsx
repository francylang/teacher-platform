import React, { Component } from 'react';
import PropTypes from 'prop-types';
import userLoginData from '../utils/userLoginData';
import { Redirect } from 'react-router';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps === true) {
      return <Redirect to='/'/>;
    };
  };

  handleChange(event, type) {
    let value = event.target.value;

    this.setState({
      [type]: value
    });
  };

  handleSubmit(event) {
    event.preventDefault();
    const user = this.state;
    if (user === userLoginData) {
      return <Redirect to='/'/>;
    }

    this.setState({
      email: '',
      password: ''
    });
  };

  render() {
    const isDisabled =
    this.state.email.length &&
    this.state.password.length ? false : true;

    return (
      <div>
        <form className='login-form'>
          <h2 className='login'>Login</h2>
          <input
            className='login-form-email'
            type='text'
            placeholder='Email'
            value={this.state.email}
            onChange={ (event) => this.handleChange(event, 'email')}>
          </input>
          <input
            className='login-form-password'
            type='password'
            placeholder='Password'
            value={this.state.password}
            onChange={ (event) => this.handleChange(event, 'password')}>
          </input>
          <input
            className='login-submit-button'
            disabled={isDisabled}
            type='submit'
            onClick={this.handleSubmit}
          >
          </input>
        </form>
      </div>
    );
  };
};

Login.propTypes = {
  history: PropTypes.object,
  isAuthenticated: PropTypes.func
};

export default Login;
