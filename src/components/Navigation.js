import React from 'react';
import { Link } from 'react-router-dom';

import AppConsumer from './context/AppConsumer';
import SignOutButton from './sessions/SignOutButton';
import * as routes from '../constants/routes';

const Navigation = (props) => {
  console.log("nav props: ", props)
  return (props.context.data.authUser
      ? <NavigationAuth />
      : <NavigationNonAuth />)

}

const NavigationAuth = () => {
  return (<div id="NavBar">
    <h1 className="title">imPact</h1>
    <div id="navLinks">
      <Link to={routes.HOME}>Home</Link>
      <Link to={routes.ACCOUNT}>Account</Link>
      <SignOutButton />
    </div>
  </div>)
}
const NavigationNonAuth = () => {
  return (<div id="NavBar">
    <h1 className="title">imPact</h1>
    <div id="aboutContent">
      Make a commitment. Make an imPact.
    </div>
  </div>)
}
export default AppConsumer(Navigation);
