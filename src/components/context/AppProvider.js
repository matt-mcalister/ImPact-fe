import React from 'react';

import AppContext from './AppContext';
import { firebase, auth } from '../../firebase';

const DEFAULT_USER_INFO = {
  name: '',
  email: '',
  passwordOne: '',
  image: '',
  creatingUserParticipant: false
}

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
        newUserInfo: DEFAULT_USER_INFO,
        loading: false,

      };
    }

    createAuthUserAndParticipant = async () => {
      console.log("creating AuthUser")
      const {
        email,
        passwordOne
      } = this.state.newUserInfo
      this.toggleLoading(true)
      await auth.doCreateUserWithEmailAndPassword(email, passwordOne)
      console.log("created AuthUser, inside appProvider")
    }

    toggleLoading = (boolean) => {
      this.setState({loading: boolean})
    }

    setSelectedAvatarImg = (image) => {
      this.setState({ newUserInfo: { ...this.state.newUserInfo, image } })
    }

    setNewUserInfo = ({ name, email, passwordOne }) => {
      this.setState({ newUserInfo: { ...this.state.newUserInfo, creatingUserParticipant: true, name, email, passwordOne } })
    }

    checkForParticipant = () => {
      console.log("checking for participant", this.state)
      firebase.db.collection('participant').doc(this.state.data.authUser.uid).get()
        .then(this.setParticipant)
    }

    setAuthUser = (authUser) => {
      console.log("setting authUser", this.state)
      this.setState(() => ({ data: {...this.state.data, authUser: authUser } }),
        () => this.state.newUserInfo.creatingUserParticipant ? this.createParticipant(authUser) : this.checkForParticipant()
      )
    }

    createParticipant = (authUser) => {
      console.log("creating participant", this.state)
      const {
        name,
        image
      } = this.state.newUserInfo

      const id = authUser.uid
      firebase.db.collection('participant').doc(id).set({
        id: id,
        name: name,
        image: image
      }).then(this.checkForParticipant)
    }

    setParticipant = (doc) => {
      if (doc.data()){
        console.log("successfully setting participant", this.state)
        this.setState({ data: {...this.state.data, participant: doc.data() }, newUserInfo: DEFAULT_USER_INFO, loading: false })
      } else {
        console.log("doc.data() false", doc)
      }
    }

    componentDidMount() {
      firebase.auth.onAuthStateChanged(authUser => {
        console.log("auth state changed", this.state);
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
