import React from 'react';
import { withRouter } from 'react-router-dom';
import * as routes from '../constants/routes';
import AppConsumer from './context/AppConsumer';
import { firebase } from '../firebase';


const withAuthorization = (Component) => {
  class authComponent extends React.Component {
    componentDidMount(){
      if (!this.props.context.data.participant) {
        console.log("no participant")
        this.props.history.push(routes.LANDING)
      }
    }

    render(){
        if (this.props.context.data.participant) {
          return <Component />
        } else {
          return null
        }
    }
  }

  return AppConsumer(withRouter(authComponent))

}

export default withAuthorization
