import React from 'react';
// import CSSModules from 'react-css-modules';
import Waves from './Waves.jsx';
import styles from '../styles/MusicPlayer.css';
import axios from 'axios';
import TimeAgo from 'react-timeago';

var audio;

class MusicPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'play': false,
      'playerIcon': 'https://s3-us-west-1.amazonaws.com/democrituscloud/play.png',
      'album': '',
      'artist': '',
      'duration': 0,
      'currentTime': 0,
      'id': 61,
      'image': '',
      'released': '',
      'song': '',
      'title': '',
      'wave': []
    }
    this.calculateTime = this.calculateTime.bind(this);
    this.calculateCurrentTime = this.calculateCurrentTime.bind(this);
    this.fetchSong = this.fetchSong.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.skipToSegment = this.skipToSegment.bind(this);
  }

  calculateTime(length) {
    // calculates song length and puts it in the right format
    var minutes = Math.floor(length / 60);
    var seconds = (length - minutes * 60).toString().substr(0, 2);
    var time = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
    return time;
  }

  calculateCurrentTime(currentTime) {
    // calculates currentTime and puts it in the right format
    var currentMin = parseInt(currentTime / 60) % 60;
    var currentSec = (currentTime % 60).toFixed();
    var currentTime = `${currentMin}:${currentSec < 10 ? '0' + currentSec : currentSec}`;
    return currentTime;
  }

  fetchSong() {
    var id = window.location.pathname.slice(1, window.location.pathname.length - 1);

    if (id) {
      id = Number(id);
    } else {
      id = this.state.id;
    }

    axios.get(`/api/jane/player/${id}`)
    .then((response) => { 
      audio = new Audio(response.data['song_url']);
      audio.addEventListener('loadedmetadata', () => {
        this.setState({
          duration: audio.duration + 1
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
    // controls song play and pause
    // this.setState({
    //   play: !this.state.play,
    // });

    if (!this.state.play) {
      audio.play();
      this.setState({
        playerIcon: 'https://s3-us-west-1.amazonaws.com/democrituscloud/pause.png',
        play: true
      });
      
      // updates currentTime and updates playerIcon when song ends
      this.timer = setInterval(() => {
        this.setState({
          currentTime: audio.currentTime
        });

        if (audio.ended) {
          this.setState({
            playerIcon: 'https://s3-us-west-1.amazonaws.com/democrituscloud/play.png',
            play: false
          });
          clearInterval(this.timer);
        }
      }, 1000);
    } else {
      audio.pause();
      this.setState({
        playerIcon: 'https://s3-us-west-1.amazonaws.com/democrituscloud/play.png',
        play: false
      });
      clearInterval(this.timer);
    }
  }

  skipToSegment(position) {
    // jump to a new segment in the song based on the position in the wave form
    // divide the duration by number of bars in the wave
    audio.currentTime = position * (this.state.duration / 241);
    this.setState({
      currentTime: audio.currentTime
    });
  }

  render() {
    return(
      <div>
        <div className={styles.MusicPlayer}>
          <div className={styles.ButtonArea}>
            <img className={styles.Button} src={this.state.playerIcon} onClick={this.clickHandler}/>
          </div>

          <div className={styles.SongInfoArea}>
            <div className={styles.ArtistAlbum}>{this.state.artist}</div>
            <div className={styles.Title}>{this.state.title}</div>
            <div className={styles.ArtistAlbum}>{this.state.album}</div>
          </div>

          <img className={styles.Image} src={this.state.image}/>

          <div className={styles.TimeArea}>
            <TimeAgo date={this.state.released} className={styles.Timestamp}/>
          </div>
          
          <div className={styles.TimeWrapper}>
            <div className={styles.CurrentTime}> 
              {this.calculateCurrentTime(this.state.currentTime)}
            </div>
            <div className={styles.Duration}> 
              {this.calculateTime(this.state.duration)}
            </div>
          </div>

          <div className={styles.Equalizer}>
            <Waves 
              wave={this.state.wave} 
              duration={this.state.duration}
              play={this.state.play}
              currentTime={this.state.currentTime}
              skipToSegment={this.skipToSegment}
              calculateTime={this.calculateTime}
              calculateCurrentTime={this.calculateCurrentTime}
            />
          </div>      
        </div>         
      </div>
    )
  }
}

export default MusicPlayer;