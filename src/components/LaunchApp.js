import React from "react"

import NewLanding from "./NewLanding"
import ProtectedPage from "./ProtectedPage"

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
      return <NewLanding />
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
