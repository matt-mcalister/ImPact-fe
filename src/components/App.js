import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import SignUpPage from './sessions/SignUpPage';
import SignInPage from './sessions/SignInPage';

import Navigation from './Navigation';
import HomePage from './Home';
import AccountPage from './Account';

import * as routes from '../constants/routes';
import AppProvider from './context/AppProvider';

const App = () => {
  return (
  <Router>
    <div>
      <Navigation  />

      <hr />

      <Route
        exact path={routes.LANDING}
        component={() => <HomePage />}
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
export default AppProvider(App);
