import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


import SignUpLink from './SignUpLink';
import SignInForm from './SignInForm';


const SignInPage = () =>
  <div>
    <h1>SignIn</h1>
    <SignInForm />
    <SignUpLink />
  </div>


export default SignInPage;
