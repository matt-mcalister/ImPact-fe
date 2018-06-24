import React from 'react';
import SignUpForm from './sessions/SignUpForm'
import SignInForm from './sessions/SignInForm'

const Landing = () => {
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

export default Landing;
