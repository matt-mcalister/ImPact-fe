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
          participant: this.setParticipant
        },
        newUserForm: {
          name: "",
          updateName: this.updateNewUserName
        }
      };
    }

    updateNewUserName = (event) => {
      this.setState({newUserForm: { ...this.state.newUserForm, name: event.target.value }})
    }

    setParticipant = (authUser) => {
      const participant = firebase.db.collection('participant').doc(authUser.uid)

      this.setState(() => ({ data: {...this.state.data, authUser: authUser, participant: participant} }))
    }

    componentDidMount() {
      firebase.auth.onAuthStateChanged(authUser => {
        authUser
          ? this.setParticipant(authUser)
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
