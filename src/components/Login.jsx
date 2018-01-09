import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import userLoginData from '../utils/userLoginData';
// import { Redirect } from 'react-router';
// import { Link } from 'react-router-dom';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };
  };

  componentWillReceiveProps(nextProps) {
    const { history } = this.props;

    if (nextProps.currentUser !== '') {
      history.push('/');
    }
  }

  handleChange(event, type) {
    const value = event.target.value;

    this.setState({ [type]: value });
  };

  handleSubmit(event) {
    const { setCurrentUser, signIn } = this.props;

    event.preventDefault();
    setCurrentUser(this.state.email);
    signIn();

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
      <div className="login-form-container">
        <form className="login-form">
          <h2 className="login">Sign In</h2>
          <input
            className="login-form-text"
            type="text"
            placeholder="Email"
            value={this.state.email}
            onChange={ (event) => this.handleChange(event, "email")}>
          </input>
          <input
            className="login-form-text"
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={ (event) => this.handleChange(event, "password")}>
          </input>
          <input
            className="login-submit-btn"
            disabled={isDisabled}
            type='submit'
            onClick={(event) => this.handleSubmit(event)}
          >
          </input>
        </form>
      </div>
    );
  };
};

Login.propTypes = {
  setCurrentUser: PropTypes.func,
  signIn: PropTypes.func,
};

export default Login;
