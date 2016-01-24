import React from 'react';
import Chart from  './chart.js';
import GoogleMap from './google-map';
export default (props)=>{

		const name= props.cityData.city.name;
		const temps = props.cityData.list.map((weather)=> weather.main.temp);
		const humidities = props.cityData.list.map((weather)=> weather.main.humidity);
		const pressures = props.cityData.list.map((weather)=> weather.main.pressure);
			return (
					<tr key={name}>
						<td><GoogleMap lat={props.cityData.city.coord.lat} lon={props.cityData.city.coord.lon} /></td>
						<td><Chart data={temps} color={'green'} units={'k'}/></td>
						<td><Chart data={humidities} color={'red'}  units={'%'}/></td>
						<td><Chart data={pressures} color={'blue'}  units={'hPa'}/></td>
					</tr>
			);
	
}	