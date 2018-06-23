import React, { Component } from 'react';

import SignUpForm from './SignUpForm'
import PickAvatar from './PickAvatar'
import AppConsumer from '../context/AppConsumer';



const SignUpPage = (props) => {
  return (<div>
    <h1>SignUp</h1>

      <SignUpForm />
    
  </div>)
}

export default AppConsumer(SignUpPage);
