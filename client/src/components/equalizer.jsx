import React from 'react';
import styles from '../styles/MusicPlayer.css';

const Equalizer = (props) => {
  return (
    <div className={styles.BarWrapper}>
      {props.wave.map((data, i) => 
        <div className={styles.Bar} key={i} style={{ height: data }}></div>
      )}
    </div>
  )
}

export default Equalizer;