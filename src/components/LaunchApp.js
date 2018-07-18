import React from "react"

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import NewLanding from "./NewLanding"
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
          path="/contact"
          component={() => <NewLanding contact={true} />}
        />
        <Route
          exact path="/"
          component={() => <NewLanding contact={false}/>}
        />
      </div>
    </Router>)
}


export default LaunchApp
