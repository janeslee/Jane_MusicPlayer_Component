import React from 'react';
import styles from '../styles/Waves.css';
import style from '../styles/MusicPlayer.css';

class Waves extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandler.bind(this);
  }

  clickHandler() {
    console.log('this is clicked');
    //should jump to a new segment in the song

  }

  render() {
    return (
      <div>
        <div className={styles.BarWrapper}>
          <div className={style.DurationWrapper}>
            <div className={styles.Duration}> 
              {this.props.currentTime}
            </div>
          </div>
          {this.props.wave.map((data, i) => 
            <div 
              className={styles.Bar} 
              key={i} style={{ height: data }}
              onClick={this.clickHandler}
            >
            </div>
          )}
          <div className={style.DurationWrapper}>
            <div className={styles.Duration}> 
              {this.props.duration}
            </div>
          </div>
        </div>
        <div className={styles.MirrorWrapper}>
          {this.props.wave.map((data, i) => 
            <div className={styles.Mirror} key={i} style={{ height: data / 3 }}></div>
          )}
        </div>
      </div>
    )
  }
}

export default Waves;