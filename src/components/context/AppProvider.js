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
        }
      };
    }

    setParticipant = () => {
      debugger
    }

    componentDidMount() {
      firebase.auth.onAuthStateChanged(authUser => {
        authUser
          ? this.setState(() => ({ data: {...this.state.data, authUser: authUser} }))
          : this.setState(() => ({ data: {...this.state.data, authUser: null} }));
      });
    }

    render() {
      // const { authUser } = this.state;
      // if (authUser){
      //   firebase.db.collection("participant").doc(this.state.authUser.uid).get()
      //     .then((doc) => console.log(doc.data()))
      // }

      return (
        <AppContext.Provider value={this.state}>
          <Component />
        </AppContext.Provider>
      );
    }
  }

export default AppProvider;
