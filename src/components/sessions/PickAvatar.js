import React from "react";
import { firebase, auth } from '../../firebase';
import AppConsumer from '../context/AppConsumer';


class PickAvatar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedAvatarImg: "",
      avatars: []
    }
  }

  componentDidMount(){
    firebase.db.collection('avatars').doc('lbkSDGFMtsGqvUSy2cZv').get()
      .then((doc) => { this.setState({ avatars: doc.data().images })
      })
      .catch((err) => {
        console.log('Error getting documents', err);
      });
  }

  onSave = async () => {
    // await firebase.db.collection('participant').doc(this.props.context.data.participant.id).update({
    //   image: this.state.selectedAvatarImg
    // })
    // console.log("updated participant")
    // this.props.context.set.participant()
    this.props.context.set.selectedAvatarImg(this.state.selectedAvatarImg)
    if (this.props.context.data.participant){
      console.log("update participant")
    } else {
      this.props.context.set.createAuthUserAndParticipant()
    }
    //   .then(this.createParticipant)
  }

  setAvatar = (a) => {
    this.setState({selectedAvatarImg: a})
  }

  render() {
    return (
      <div className="everyMainBody">
        <img className="avatar participantAvatar" src={this.state.selectedAvatarImg} />
        <h1>Set a Profile Image or Select an Avatar!</h1>
        <button onClick={this.onSave}>Save Avatar Image</button>
        <div className="avatarContainer">
          {this.state.avatars.map((a,i) => <img onClick={(e) => this.setAvatar(a)} key={i} className="avatar avatarChoice" src={a} />)}
        </div>
      </div>


    )
  }
}
export default AppConsumer(PickAvatar);
