import React, {Component} from 'react';
import {connect} from 'react-redux';
import WeatherDetail from '../components/weather/weather-detail';


class  WeatherList extends Component {
	render(){
		return (
			<table className='table table-hover'>
				<thead>
					<tr> 
						<th>City</th>
						<th>Temparature (K)</th>
						<th>Humidity (%)</th>
						<th>Pressure (hPa)</th>																		
					</tr>
				</thead>
				<tbody>
<<<<<<< Updated upstream
					{this.props.weather.map((cityData, index)=>{
=======
					{this.props.weather.map((cityData,index)=>{
>>>>>>> Stashed changes
						return(
							 <WeatherDetail key={index} cityData={cityData} />
							);
					})}
				</tbody>
			</table>
			);
	}
}

function mapStateToProps({weather}){
	return {weather};
}

export default connect(mapStateToProps)(WeatherList)
