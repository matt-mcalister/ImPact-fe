import React from 'react';
import { Link } from 'react-router-dom';

import AppConsumer from './context/AppConsumer';
import SignOutButton from './sessions/SignOutButton';
import * as routes from '../constants/routes';

const Navigation = (props) => {
  return (props.context.data.authUser
      ? <NavigationAuth />
      : <NavigationNonAuth />)

}

const NavigationAuth = () => {
  return (<ul>
    <li><Link to={routes.LANDING}>Landing</Link></li>
    <li><Link to={routes.HOME}>Home</Link></li>
    <li><Link to={routes.ACCOUNT}>Account</Link></li>
    <li><SignOutButton /></li>
  </ul>)
}
const NavigationNonAuth = () => {
  return (<ul>
    <li><Link to={routes.LANDING}>Landing</Link></li>
    <li><Link to={routes.SIGN_IN}>Sign In</Link></li>
  </ul>)
}
export default AppConsumer(Navigation);
