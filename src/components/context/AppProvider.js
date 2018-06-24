import React from 'react';

import AppContext from './AppContext';
import { firebase } from '../../firebase';

const AppProvider = (Component) =>
  class appProvider extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        data: {
          authUser: null,
          participant: null
        },
        set: {
          participant: this.checkForParticipant
        }
      };
    }

    checkForParticipant = () => {

      firebase.db.collection('participant').doc(this.state.data.authUser.uid).get()
        .then(this.setParticipant)
    }

    setAuthUser = (authUser) => {
      this.setState(() => ({ data: {...this.state.data, authUser: authUser } }),
      this.checkForParticipant
     )
    }

    setParticipant = (doc) => {
      if (doc.data()){
        this.setState({ data: {...this.state.data, participant: doc.data() } })
      } else {
        console.log("doc.data() false", doc.data())
      }
    }

    componentDidMount() {
      firebase.auth.onAuthStateChanged(authUser => {
        authUser
          ? this.setAuthUser(authUser)
          : this.setState(() => ({ data: {...this.state.data, authUser: null, participant: null} }));
      });
    }

    render() {

      return (
        <AppContext.Provider value={this.state}>
          <Component />
        </AppContext.Provider>
      );
    }
  }

export default AppProvider;
