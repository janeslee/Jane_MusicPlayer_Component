import React from 'react';

// import  CanvasJSReact from '../styles/canvasjs.react.js';
// var CanvasJS = CanvasJSReact.CanvasJS;
// var CanvasJSChart = CanvasJSReact.CanvasJSChart;

// class Equalizer extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     const options = {
//       title: {
//         text: "Basic Column Chart in React"
//       },
//       data: [{
//         type: "column",
//         dataPoints: [
//           { label: "Apple",  y: 10  },
//           { label: "Orange", y: 15  },
//           { label: "Banana", y: 25  },
//           { label: "Mango",  y: 30  },
//           { label: "Grape",  y: 28  }
//         ]
//       }]
//     }
//     return (
//       <div>
//         <CanvasJSChart options = {options} 
//           // onRef = {ref => this.chart = ref}
//         />
//       </div>
//     )
//   }
// }

// export default Equalizer;


/* App.js */
// var React = require('react');
// var Component = React.Component;
// var CanvasJSReact = require('../styles/canvasjs.react');
// var CanvasJS = CanvasJSReact.CanvasJS;
// var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
// class App extends Component {	
// 	render() {
// 		const options = {
// 			animationEnabled: true,
// 			exportEnabled: true,
// 			theme: "light2", //"light1", "dark1", "dark2"
// 			title:{
// 				text: "Simple Column Chart with Index Labels"
// 			},
// 			data: [{
// 				type: "column", //change type to bar, line, area, pie, etc
// 				//indexLabel: "{y}", //Shows y value on all Data Points
// 				indexLabelFontColor: "#5A5757",
// 				indexLabelPlacement: "outside",
// 				dataPoints: [
// 					{ x: 10, y: 71 },
// 					{ x: 20, y: 55 },
// 					{ x: 30, y: 50 },
// 					{ x: 40, y: 65 },
// 					{ x: 50, y: 71 },
// 					{ x: 60, y: 68 },
// 					{ x: 70, y: 38 },
// 					{ x: 80, y: 92, indexLabel: "Highest" },
// 					{ x: 90, y: 54 },
// 					{ x: 100, y: 60 },
// 					{ x: 110, y: 21 },
// 					{ x: 120, y: 49 },
// 					{ x: 130, y: 36 }
// 				]
// 			}]
// 		}
		
// 		return (
// 		<div>
// 			<CanvasJSChart options = {options} 
// 			onRef={ref => this.chart = ref}
// 			/>
// 			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
// 		</div>
// 		);
// 	}
// }
 
// module.exports = App;



class App extends React.Component {
  componentDidMount() {
      var App = new CanvasJS.Chart("chartContainer", {
          title:{
              text:"Fortune Global 500 Companies by Country"
          },
          animationEnabled: true,
         
          data: [
          {     
              type: "bar",
              dataPoints: [
                {y: 5, label: "Sweden"  },
                {y: 6, label: "Taiwan"  },
                {y: 7, label: "Russia"  },
                {y: 8, label: "Spain"  },
                {y: 8, label: "Brazil"  },
                {y: 8, label: "India"  },
                {y: 9, label: "Italy"  },
                {y: 9, label: "Australia"  },
                {y: 12, label: "Canada"  },
                {y: 13, label: "South Korea"  },
                {y: 13, label: "Netherlands"  },
                {y: 15, label: "Switzerland"  },
                {y: 28, label: "Britain" },
                {y: 32, label: "Germany"   },
                {y: 32, label: "France"  },
                {y: 68, label: "Japan"   },
                {y: 73, label: "China"},
                {y: 132, label: "US" }
              ]
          }

          ]
      });
  App.render();
}
render() {
  return (
    <div id="chartContainer" style={{height: 450 + "px", width: 100 + "%"}}>
    </div>
  );
}
}

export default App;