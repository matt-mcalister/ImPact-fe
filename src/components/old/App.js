import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import SignUpPage from './sessions/SignUpPage';
import SignInPage from './sessions/SignInPage';

import Navigation from './Navigation';
import HomePage from './Home';
import LandingPage from './Landing';
import AccountPage from './Account';

import * as routes from '../constants/routes';
import AppProvider from './context/AppProvider';

const pageStyling = {
  position: "fixed",
  height:"88%",
  width:"100%",
  backgroundColor: "#0644a8",
  color: "white"
}

const App = () => {
  return (
  <Router>
    <div>
      <Navigation  />

      <Route
        exact path={routes.LANDING}
        component={() => <LandingPage style={pageStyling} />}
      />
      <Route
        exact path={routes.SIGN_UP}
        component={() => <SignUpPage style={pageStyling} />}
      />
      <Route
        exact path={routes.SIGN_IN}
        component={() => <SignInPage style={pageStyling} />}
      />
      <Route
        exact path={routes.HOME}
        component={() => <HomePage style={pageStyling} />}
      />
      <Route
        exact path={routes.ACCOUNT}
        component={() => <AccountPage style={pageStyling} />}
      />
    </div>
  </Router>
  )
}
export default AppProvider(App);
