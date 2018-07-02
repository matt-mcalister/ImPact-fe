import React from "react"

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import NewLanding from "./NewLanding"
import passwordProtectedPage from "./HOC/passwordProtectedPage"
import PrivacyPolicy from "./PrivacyPolicy"
import TermsOfService from "./TermsOfService"


const LaunchApp = (props) => {
  return (
    <Router>
      <div id="AppContainer">
        <Route
          path="/terms"
          component={() => <TermsOfService />}
        />
        <Route
          path="/privacy"
          component={() => <PrivacyPolicy />}
        />
        <Route
        exact path="/"
        component={() => <NewLanding />}
        />
      </div>
    </Router>)
}


export default passwordProtectedPage(LaunchApp)
