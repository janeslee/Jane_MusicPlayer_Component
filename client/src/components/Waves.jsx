import React from 'react';
import styles from '../styles/Waves.css';

class Waves extends React.Component {
  constructor(props) {
    super(props);
    // this.changeColor = this.changeColor.bind(this);
  }

// if props.state.play === true
//   wave form changes color to orange every second
//   if hovering over wave, change color to lighter orange
// if props.state.play === false
//   hovering over wave, change color to white
// if song has ended
//   wave changes from orange to white

changeColor(play) {
  if (this.props.play === true) {

  }
}

  render() {
    return (
      <div>
        <div className={styles.BarWrapper}>
          {this.props.wave.map((data, i) => {
            // not hovering over wave forms. song is playing
            if (this.props.play && this.props.currentTime === i) {
              return ( 
                <div 
                  key={i} 
                  className={styles.AnimatedBar}
                  style={{height: data, animationDuration: `${this.props.duration / 241}s`}}
                  onClick={() => this.props.skipToSegment(i)}
                  >
                </div>
              )
            } else if (this.props.currentTime > i) {
              // played
              return ( 
                <div 
                  key={i} 
                  className={styles.Bar} 
                  style={{height: data, background: 'linear-gradient(#ff6400, #ff3500)'}}
                  onClick={() => this.props.skipToSegment(i)}
                  >
                </div>
              )
            } else {
              // not played
              return (
                <div 
                  key={i}
                  className={styles.Bar} 
                  style={{height: data}}
                  onClick={() => this.props.skipToSegment(i)}
                  >
               </div> 
              )
            }
          })}
        </div>

        <div className={styles.MirrorWrapper}>
          {this.props.wave.map((data, i) => 
            <div 
              key={i} 
              className={styles.Mirror} 
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
