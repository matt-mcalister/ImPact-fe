import React from "react"

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import NewLanding from "./NewLanding"
import ProtectedPage from "./ProtectedPage"
import PrivacyPolicy from "./PrivacyPolicy"
import TermsOfService from "./TermsOfService"

class LaunchApp extends React.Component {
	constructor(props){
		super(props)
    this.state = {
      passwordInput: "",
      access: false
    }
	}

  updatePasswordInput = (e) => {
    this.setState({passwordInput: e.target.value})
  }

  onSubmit = (e) => {
    e.preventDefault()
    if (this.state.passwordInput.toLowerCase() === "impact"){
      this.setState({access: true})
    } else {
      alert("Invalid password! Please try again.")
      this.setState({passwordInput: ""})
    }
  }

	render(){
		if (this.state.access){
      return (
				<Router>
					<div>
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
    } else {
      return (
      <ProtectedPage
      passwordInput={this.state.passwordInput}
      updatePassword={this.updatePasswordInput}
      handleSubmit={this.onSubmit}
      />)
    }
	}
}

export default LaunchApp
