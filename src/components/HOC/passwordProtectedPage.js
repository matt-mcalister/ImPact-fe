import React from "react"

import ProtectedPage from "./ProtectedPage"

const passwordProtectedPage = (Component) => {
  class NewComponent extends React.Component {
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

    handleSubmit = (e) => {
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
  				<Component />)
      } else {
        return (
        <ProtectedPage
        passwordInput={this.state.passwordInput}
        updatePassword={this.updatePasswordInput}
        handleSubmit={this.handleSubmit}
        />)
      }
  	}
  }

  return NewComponent
}


export default passwordProtectedPage
