import React from 'react';
import styles from '../styles/Waves.css';
import style from '../styles/MusicPlayer.css';

class Waves extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className={styles.BarWrapper}>
          {this.props.wave.map((data, i) => 
            <div 
              className={styles.Bar} 
              key={i} 
              style={{ height: data }}
              onClick={() => this.props.skipToSegment(i)}
            >
            </div>
          )}
        </div>
        <div className={styles.MirrorWrapper}>
          {this.props.wave.map((data, i) => 
            <div 
            className={styles.Mirror} 
            key={i} 
            style={{ height: data / 3 }}
            >
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Waves;