import React from "react";
import { firebase } from '../../firebase';
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

  onSave = () => {
    debugger
  }

  setAvatar = (a) => {
    this.setState({selectedAvatarImg: a})
  }

  render() {
    return (
      <div>
        <img className="avatar participantAvatar" src={this.state.selectedAvatarImg} />
        <h1>Set a Profile Image or Select an Avatar!</h1>
        <button onClick={this.onSave}>Save Avatar Image</button>
        <div className="avatarContainer">
          {this.state.avatars.map(a => <img onClick={(e) => this.setAvatar(a)} key={a} className="avatar avatarChoice" src={a} />)}
        </div>
      </div>


    )
  }
}
export default AppConsumer(PickAvatar);
