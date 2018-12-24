import React from 'react';
import CSSModules from 'react-css-modules';
import styles from '../styles/MusicPlayer.css';
// import axios from 'axios';

class MusicPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playButton: 'https://s3-us-west-1.amazonaws.com/democrituscloud/pause.png'
    }
  }

  render() {
    return(
      <div>
        <h1>Rendering from Music Player</h1>
        <button styleName='playButton'>
          <img src={this.state.playButton} />
        </button>
      </div>
    )
  }
}

export default MusicPlayer;