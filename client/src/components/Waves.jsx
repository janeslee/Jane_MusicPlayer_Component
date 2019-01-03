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
               {console.log('this is play status', this.props.play)}

        <div className={styles.BarWrapper}>
          {this.props.wave.map((data, i) => {
            if (this.props.play === true) {
              return ( 
                <div 
                  className={styles.Bar} 
                  key={i} 
                  style={{ height: data }}
                  onClick={() => this.props.skipToSegment(i)}
                  >
                </div>
              )
            } else {
              return ( 
                <div 
                  className={styles.AnimatedBar} 
                  key={i} 
                  style={{ height: data }}
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
