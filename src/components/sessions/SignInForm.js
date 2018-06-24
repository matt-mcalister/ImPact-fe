import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import AppConsumer from "../context/AppConsumer"

import { auth } from '../../firebase';
import * as routes from '../../constants/routes';

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    event.preventDefault();

    const {
      email,
      password,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        console.log("should be rerouting")
        history.push(routes.HOME);
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });
  }

  render() {
    const {
      email,
      password,
      error,
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '';

    return (
      <form onSubmit={this.onSubmit} id="signInForm">
        <input
          value={email}
          onChange={event => this.setState(byPropKey('email', event.target.value))}
          type="text"
          placeholder="Email Address"
        /><br/>
        <input
          value={password}
          onChange={event => this.setState(byPropKey('password', event.target.value))}
          type="password"
          placeholder="Password"
        /><br/>
        <button disabled={isInvalid} type="submit">
          Sign In
        </button>

        { error && <p>{error.message}</p> }
      </form>
    );
  }
}

export default AppConsumer(withRouter(SignInForm));
