import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import SignUpPage from './sessions/SignUpPage';
import SignInPage from './sessions/SignInPage';
import PasswordForgetPage from './sessions/PasswordForget';

import Navigation from './Navigation';
import HomePage from './Home';
import LandingPage from './Landing';
import AccountPage from './Account';

import * as routes from '../constants/routes';
import { firebase } from '../firebase';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null,
    };
  }

  componentDidMount() {
    firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState(() => ({ authUser }))
        : this.setState(() => ({ authUser: null }));
    });
  }


  render() {
    return (
    <Router>
      <div>
        <Navigation authUser={this.state.authUser} />

        <hr/>

        <Route
          exact path={routes.LANDING}
          component={() => <LandingPage />}
        />
        <Route
          exact path={routes.SIGN_UP}
          component={() => <SignUpPage />}
        />
        <Route
          exact path={routes.SIGN_IN}
          component={() => <SignInPage />}
        />
        <Route
          exact path={routes.PASSWORD_FORGET}
          component={() => <PasswordForgetPage />}
        />
        <Route
          exact path={routes.HOME}
          component={() => <HomePage />}
        />
        <Route
          exact path={routes.ACCOUNT}
          component={() => <AccountPage />}
        />
      </div>
    </Router>
    )
  }
}
export default App;
