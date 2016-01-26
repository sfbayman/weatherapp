import React, {Component}  from 'react';
import ReactDOM from 'react-dom';
import C3Chart from 'c3-react';
	const data = [
            [30, 200, 100, 400, 150, 250],
            [130, 100, 140, 200, 150, 50]
        ];

	const type = "bar";
	const options = {
				  padding: {
				    top: 20,
				    bottom: 20,
				    left: 40,
				    right: 10
				  },
				  size: {
				    width: 800,
				    height: 600
				  },
				  subchart: true,
				  zoom: true,
				  grid: {
				    x: false,
				    y: true
				  },
				  labels: true,
				  axisLabel: {
				    x: "product",
				    y: "quantity"
				  },
				  onClick: function(d) {
				    let categories = this.categories(); //c3 function, get categorical labels
				    console.log(d);
				    console.log("you clicked {" + d.name + ": " + categories[d.x] + ": " + d.value + "}");
				  }
				};

export default class PieChart extends Component{
	render(){
		return(
				<C3Chart data={data} type={type} options={options}/>
			);
	}
}