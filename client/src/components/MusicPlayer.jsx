import React from 'react';
import CSSModules from 'react-css-modules';
import styles from '../styles/MusicPlayer.css';

class MusicPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playButton: 'https://s3-us-west-1.amazonaws.com/democrituscloud/soundcloud-play-button-508x509.jpg'
    }
  }

  render() {
    return(
      <div>
        <h1>Rendering from Music Player</h1>
        <div styleName='playButton'>
          <img src={this.state.playButton} />
        </div>
      </div>
    )
  }
}

export default MusicPlayer;