import React from 'react';

import AppContext from './AppContext';
import { firebase, auth } from '../../firebase';

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
          participant: this.checkForParticipant,
          newUserInfo: this.setNewUserInfo,
          selectedAvatarImg: this.setSelectedAvatarImg,
          createAuthUserAndParticipant: this.createAuthUserAndParticipant
        },
        newUserInfo: {
          name: '',
          email: '',
          passwordOne: '',
          image: ''
        }
      };
    }

    createAuthUserAndParticipant = () => {

      const {
        email,
        passwordOne
      } = this.state.newUserInfo

      auth.doCreateUserWithEmailAndPassword(email, passwordOne)
        .then(this.createParticipant)

    }

    setSelectedAvatarImg = (image) => {
      this.setState({ newUserInfo: { ...this.state.newUserInfo, image } })
    }

    setNewUserInfo = ({ name, email, passwordOne }) => {
      this.setState({ newUserInfo: { ...this.state.newUserInfo, name, email, passwordOne } })
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

    createParticipant = (authUser) => {
      const {
        name,
        image
      } = this.state.newUserInfo

      const id = authUser.user.uid
      firebase.db.collection('participant').doc(id).set({
        id: id,
        name: name,
        image: image
      })
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
