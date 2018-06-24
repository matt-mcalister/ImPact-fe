import React from 'react';
import { withRouter } from 'react-router-dom';
import * as routes from '../constants/routes';
import AppConsumer from './context/AppConsumer';
import { firebase } from '../firebase';


const withAuthorization = (Component) => {
  class authComponent extends React.Component {
    componentDidMount(){
      firebase.auth.onAuthStateChanged(authUser => {
        if (!authUser) {
          console.log("no auth user")
          this.props.history.push(routes.LANDING)
        }
      })
    }

    render(){
        if (this.props.context.data.authUser) {
          return <Component />
        } else {
          return null
        }
    }
  }

  return AppConsumer(withRouter(authComponent))

}

export default withAuthorization
