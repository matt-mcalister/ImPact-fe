import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import * as routes from '../../constants/routes';


import { auth, firebase } from '../../firebase';

const INITIAL_STATE = {
  name: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  resetState = () => {
    console.log("Document successfully written!");
    this.setState(() => ({ ...INITIAL_STATE }));
  }

  updateError = (error) => {
    console.error("Error writing document: ", error);
    this.setState(byPropKey('error', error))
  }

  createParticipant = (authUser) => {
      firebase.db.collection('participant').doc(authUser.user.uid).set({
        id: authUser.user.uid,
        name: this.state.name
      }).catch(this.updateError)
  }

  onSubmit = (event) => {
    event.preventDefault()
    const {
      name,
      email,
      passwordOne,
    } = this.state;

    auth.doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(this.createParticipant)
      .catch(this.updateError);

  }

  render() {
    const {
    name,
    email,
    passwordOne,
    passwordTwo,
    error,
  } = this.state;

  const isInvalid = (
  passwordOne !== passwordTwo ||
  passwordOne === '' ||
  email === '' ||
  name === '');

  return (
    <form onSubmit={this.onSubmit}>
      <input
        value={name}
        onChange={event => this.setState(byPropKey('name', event.target.value))}
        type="text"
        placeholder="Full Name"
      />
      <input
        value={email}
        onChange={event => this.setState(byPropKey('email', event.target.value))}
        type="text"
        placeholder="Email Address"
      />
      <input
        value={passwordOne}
        onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
        type="password"
        placeholder="Password"
      />
      <input
        value={passwordTwo}
        onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
        type="password"
        placeholder="Confirm Password"
      />
      <button disabled={isInvalid} type="submit">
        Sign Up
      </button>

      { error && <p>{error.message}</p> }
    </form>
    );
  }
}

export default withRouter(SignUpForm);
