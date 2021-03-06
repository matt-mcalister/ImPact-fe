import React from 'react';
import { withRouter } from 'react-router-dom';
import * as routes from '../../constants/routes';

import SignUpForm from './SignUpForm'
import PickAvatar from './PickAvatar'
import AppConsumer from '../context/AppConsumer';



const SignUpPage = (props) => {
  return (<div>
    <h1>Sig nUp</h1>
    { props.context.data.participant ?
      props.context.data.participant.image ? props.history.push(routes.HOME) : <PickAvatar /> :
      <SignUpForm />
    }
  </div>)
}

export default AppConsumer(withRouter(SignUpPage));
