import React from 'react';
// import CSSModules from 'react-css-modules';
import Waves from './Waves.jsx';
import styles from '../styles/MusicPlayer.css';
import axios from 'axios';
import TimeAgo from 'react-timeago';

var audio;

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
      'currentTime': '',
      'id': 1,
      'image': '',
      'released': '',
      'song': '',
      'title': '',
      'wave': []
    }
    this.calculateDuration = this.calculateDuration.bind(this);
    this.fetchSong = this.fetchSong.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.songPlayed = this.songPlayed.bind(this);
  }

  calculateDuration(length) {
    var minutes = Math.floor(length / 60);
    var seconds = (length - minutes * 60).toString().substr(0, 2);
    var time = `${minutes}:${seconds}`;
    return time;
  }

  fetchSong() {
    axios.get(`/api/jane/player/${this.state.id}`)
    .then((response) => { 
      audio = new Audio(response.data['song_url']);
      audio.addEventListener('loadedmetadata', () => {
        this.setState({
          duration: this.calculateDuration(audio.duration)
        });
      });
      this.setState({
        album: response.data.album,
        artist: response.data.artist,
        id: response.data.id,
        image: response.data.image,
        released: response.data.released,
        song: audio,
        title: response.data.title,
        wave: response.data.wave.split(',')
      });
    })
    .catch((error) => {
      console.log(error)
    });
  }

  componentDidMount() {
    this.fetchSong();
  }

  clickHandler(event) {
    this.setState({
      play: !this.state.play
    });
    if (this.state.play === true) {
      this.state.song.pause();
    } else {
      this.state.song.play();
    }
  }

  songPlayed() {
    this.setState({
      currentTime: this.audio.currentTime()
    })
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
            <Waves 
              wave={this.state.wave} 
              duration={this.state.duration}
              play={this.state.play}
              songPlayed={this.songPlayed}
            />
          </div>    
        </div>         
      </div>
    )
  }
}

export default MusicPlayer;