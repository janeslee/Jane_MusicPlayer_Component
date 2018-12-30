import React from 'react';
// import CSSModules from 'react-css-modules';
import Equalizer from './Equalizer.jsx';
import styles from '../styles/MusicPlayer.css';
import axios from 'axios';
import TimeAgo from 'react-timeago';


const imagePaths = {
  pauseButton: 'https://s3-us-west-1.amazonaws.com/democrituscloud/pause.png',
  playButton: 'https://s3-us-west-1.amazonaws.com/democrituscloud/play.png'
}

class MusicPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'play': false,
      'album': '',
      'artist': '',
      'duration': '',
      'id': 1,
      'image': '',
      'released': '',
      'song_url': 'https://s3-us-west-1.amazonaws.com/democrituscloud/Despacito.mp3',
      'title': '',
      'wave': []
    }
    this.audio = new Audio(this.state['song_url']);
    this.fetchSong = this.fetchSong.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }

  componentDidMount() {
    this.fetchSong();
  }

  fetchSong() {
    axios.get(`/api/jane/player/${this.state.id}`)
    .then((response) => {   
      this.setState({
        album: response.data.album,
        artist: response.data.artist,
        duration: response.data.duration,
        id: response.data.id,
        image: response.data.image,
        released: response.data.released,
        song_url: response.data['song_url'],
        title: response.data.title,
        wave: response.data.wave.split(',')
      });
    })
    .catch((error) => {
      console.log(error)
    });
  }

  clickHandler(event) {
    this.setState({
      play: !this.state.play
    });
    if (this.state.play === true) {
      this.audio.pause();
    } else {
      this.audio.play();
    }
  }

  render() {
    return(
      <div>
        <div className={styles.MusicPlayer}>
          <div className={styles.ButtonArea}>
            {
              this.state.play
              ?
              <img className={styles.Button} src={imagePaths.pauseButton} onClick={this.clickHandler}/>
              :
              <img className={styles.Button} src={imagePaths.playButton} onClick={this.clickHandler}/>
            }
          </div>
          <div className={styles.SongInfoArea}>
            <div className={styles.ArtistAlbum}>{this.state.artist}</div>
            <div className={styles.Title}>{this.state.title}</div>
            <div className={styles.ArtistAlbum}>{this.state.album}</div>
          </div>
          <div className={styles.TimeArea}>
            <TimeAgo date={this.state.released} className={styles.Timestamp}/>
          </div>
          <img className={styles.Image} src={this.state.image}/>
          <div className={styles.Equalizer}>
            <Equalizer wave={this.state.wave}/>
          </div>    
        </div>         
      </div>
    )
  }
}

export default MusicPlayer;