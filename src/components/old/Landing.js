import React from 'react';
import SignUpForm from './sessions/SignUpForm'
import SignInForm from './sessions/SignInForm'
import { withRouter } from 'react-router-dom';
import * as routes from '../constants/routes';
import PickAvatar from './sessions/PickAvatar'
import AppConsumer from './context/AppConsumer';
import withLoading from './withLoading'

const DefaultLanding = () => {
  return (
      <div id="landingPageBody" className="everyMainBody">
        <div />
        <div id="signInSection">
          <h3>Sign In</h3>
          <SignInForm />
        </div>
        <p id="or">
          -or-
        </p>
        <div id="signUpSection">
          <h3>Sign Up</h3>
          <SignUpForm />
        </div>
        <div />
      </div>
  )
}

// const Landing = (props) => {
//   if (props.context.newUserInfo.creatingUserParticipant) {
//     return <PickAvatar />
//   } else {
//     return <DefaultLanding />
//   }
// }


class Landing extends React.Component {
  state = {}

	static getDerivedStateFromProps(props, state){
    if (props.context.data.participant) {
      props.history.push(routes.HOME)
    }
    return {...state}
  }


	render(){
    if (this.props.context.newUserInfo.creatingUserParticipant) {
      return <PickAvatar />
    } else {
      return <DefaultLanding />
    }
	}
}


export default withLoading(AppConsumer(withRouter(Landing)));
