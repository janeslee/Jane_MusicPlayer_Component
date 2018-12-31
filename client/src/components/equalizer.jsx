import React from 'react';
import styles from '../styles/MusicPlayer.css';

const Equalizer = (props) => {
  return (
    <div>
      <div className={styles.BarWrapper}>
        {props.wave.map((data, i) => 
          <div className={styles.Bar} key={i} style={{ height: data }}></div>
        )}
      </div>
      <div className={styles.MirrorWrapper}>
        {props.wave.map((data, i) => 
          <div className={styles.Mirror} key={i} style={{ height: data / 3 }}></div>
        )}
      </div>
    </div>
  )
}

export default Equalizer;